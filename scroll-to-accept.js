const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback, { 
    root: terms, 
    threshold: 1,
});

//gets the last paragraph from the terms
ob.observe(terms.lastElementChild); 


