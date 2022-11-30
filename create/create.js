import { createBunny, getFamilies, checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();

    // get the name and family id from the form
    const formData = new FormData(form);
    const name = formData.get('bunny-name');
    const family = formData.get('family-id');

    // use createBunny to create a bunny with this name and family id
    await createBunny({ name: name, family_id: family });
    location.replace('../');
});

self.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    const familySelect = document.querySelector("select[name='family-id']");
    // go get the families from supabase
    const families = await getFamilies();
    // for each family
    for (const item of families) {
        // create an option tag
        const option = document.createElement('option');
        // set the option's value and text content
        option.textContent = item.name;
        option.value = item.id;
        // and append the option to the select
        familySelect.append(option);
    }
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
