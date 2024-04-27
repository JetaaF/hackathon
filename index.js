const categories = document.querySelectorAll('.html,.css,.javascript,.python,.cplusplus');

const el = document.getElementById('searchform')
el.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEl = document.getElementById('searchInput')
    const query = inputEl.value;
    
    if (!query) {
        categories.forEach(category => {
            category.style.display = 'block';
        })
    }

    categories.forEach(category => {
        debugger;
        const categoryName = category.classList[0];
        
        if (categoryName.includes(query)) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
})