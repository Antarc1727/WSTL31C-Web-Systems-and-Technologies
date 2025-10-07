let shopName = "String Theory Guitars";
let featuredCount = 3;
let guitars = [
    { name: "Fender Mustang", type: "Electric", price: 1200 },
    { name: "ESP Eclipse", type: "Electric", price: 1500 },
    { name: "Sterling by Music Man", type: "Electric", price: 900 },
    { name: "Taylor 214ce", type: "Acoustic", price: 1100 }
];

let totalGuitars = guitars.length;
let expensiveGuitars = 0;

for (let i = 0; i < guitars.length; i++) {
    if (guitars[i].price > 1000) {
        expensiveGuitars++;
    }
}

let guitarNames = "";
for (let i = 0; i < guitars.length; i++) {
    guitarNames += guitars[i].name;
    if (i < guitars.length - 1) {
        guitarNames += ", ";
    }
}

let welcomeMessage = `Welcome to ${shopName}! We have ${totalGuitars} guitars in our collection: ${guitarNames}.`;

function getGuitarByType(type) {
    let result = [];
    for (let i = 0; i < guitars.length; i++) {
        if (guitars[i].type === type) {
            result.push(guitars[i]);
        }
    }
    return result;
}

let shopInfo = {
    name: shopName,
    location: "Online & In-store",
    featured: guitars.slice(0, featuredCount),
    getFeaturedNames: function() {
        return this.featured.map(guitar => guitar.name).join(", ");
    }
};

console.log(welcomeMessage);
console.log("Number of expensive guitars:", expensiveGuitars);
console.log("Acoustic guitars:", getGuitarByType("Acoustic"));
console.log("Featured guitars:", shopInfo.getFeaturedNames());

document.getElementById("showJsInfo")?.addEventListener("click", function() {
    let info = `${welcomeMessage}\n\nNumber of expensive guitars: ${expensiveGuitars}\nAcoustic guitars: ${JSON.stringify(getGuitarByType("Acoustic"))}\nFeatured guitars: ${shopInfo.getFeaturedNames()}`;
    alert(info);
});

(function() {
    const topBtn = document.createElement('button');
    topBtn.id = 'scrollTopBtn';
    topBtn.textContent = 'Top';
    topBtn.style.position = 'fixed';
    topBtn.style.left = '';
    topBtn.style.right = '24px';
    topBtn.style.bottom = '24px';
    topBtn.style.zIndex = '9999';
    topBtn.style.padding = '0.7em 1.5em';
    topBtn.style.fontSize = '1em';
    topBtn.style.background = '#ffb347';
    topBtn.style.color = '#222';
    topBtn.style.border = 'none';
    topBtn.style.borderRadius = '6px';
    topBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
    topBtn.style.cursor = 'pointer';
    topBtn.style.display = 'none';
    topBtn.style.transition = 'opacity 0.2s';
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            topBtn.style.display = 'block';
            topBtn.style.opacity = '1';
        } else {
            topBtn.style.opacity = '0';
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

