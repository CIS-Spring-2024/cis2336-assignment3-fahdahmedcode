document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        { id: 1, name: "Buttermilk Pancakes", price: 6.00, image: "https://www.browneyedbaker.com/wp-content/uploads/2021/06/buttermilk-pancakes-8-1200.jpg", description: "Treat yourself to a stack of fluffy buttermilk pancakes that are sure to brighten your morning. Made with our signature buttermilk batter, these pancakes are light, airy, and perfectly golden. Whether enjoyed plain or adorned with your favorite toppings, they are a delightful breakfast indulgence.", category: "breakfast" },
        { id: 2, name: "Belgian Waffles", price: 7.00, image: "https://houseofnasheats.com/wp-content/uploads/2021/09/Belgian-Waffles-19.jpg", description: "Elevate your breakfast experience with our indulgent Belgian waffles. Crisp on the outside, light and airy on the inside, these waffles are a symphony of textures. Served with a dollop of whipped cream, fresh berries, and a drizzle of maple syrup, they are a decadent treat fit for any morning occasion.", category: "breakfast" },
        { id: 3, name: "French Toast", price: 6.50, image: "https://www.allrecipes.com/thmb/D0J8nfqLD1nqe6Gy2N-91Rg5Qs0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7016-french-toast-i-DDMFS-4x3-26c468d9cb284c2c83432bf2d33d49f8.jpg", description: "Dive into a classic breakfast favorite with our decadent French toast. Thick slices of golden-brown bread are dipped in a rich custard batter, then grilled to perfection. Topped with a dusting of powdered sugar and a drizzle of maple syrup, each bite is a symphony of sweet and savory flavors.", category: "breakfast" },
        { id: 4, name: "Mediterranean Omelette", price: 9.50, image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps69429_SD163614C12_04_4b-3.jpg?fit=700,700", description: "Embark on a culinary journey to the Mediterranean with our flavorful omelette. Bursting with sun-kissed tomatoes, tangy feta cheese, briny olives, and aromatic herbs, this omelette offers a taste of the Mediterranean coastline with every forkful.", category: "breakfast" },
        { id: 5, name: "Fluffy Cheese Omelette", price: 8.50, image: "https://www.mrbreakfast.com/images/1135_fluffy_cheese_omelette.jpg", description: "Indulge in a delightful breakfast experience with our fluffy cheesy omelette. Made with farm-fresh eggs and a generous blend of melted cheese, this savory sensation will melt in your mouth with every bite.", category: "breakfast" },
        { id: 6, name: "Cheeseburger", price: 9.75, image: "https://www.foodandwine.com/thmb/qEZ3iMxsIKQ85j5flvS5k5Ng2yI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hatch-chile-smash-burgers-FT-seo-RECIPE0719_0-183c980af99541528d6cfa7f40ca2c21.jpg", description: "Enjoy the classic American favorite with our mouthwatering cheeseburger. Crafted with a juicy beef patty, topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles, all nestled between soft, toasted buns.", category: "lunch" },
        { id: 7, name: "Turkey Burger", price: 10.50, image: "https://feelgoodfoodie.net/wp-content/uploads/2022/06/Grilled-Turkey-Burger-11.jpg", description: "Made from lean ground turkey, seasoned to perfection, and grilled to juicy perfection, this burger offers a lighter yet flavorful option. Topped with fresh lettuce, ripe tomatoes, and zesty avocado, it's a guilt-free indulgence you'll love.", category: "lunch" },
        { id: 8, name: "Ultimate Grilled Cheese Sandwich", price: 8.75, image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/01/grilled-cheese-sandwich-500x500.jpg", description: "Indulge in comfort food bliss with our ultimate grilled cheese sandwich. Thick slices of artisan bread, generously buttered and toasted to golden perfection, sandwich layers of gooey melted cheese.", category: "lunch" },
        { id: 9, name: "Grilled Chicken Sandwich", price: 10.75, image: "https://www.jocooks.com/wp-content/uploads/2021/07/grilled-chicken-sandwich-1-1.jpg", description: "Savor the savory goodness of our grilled chicken sandwich. Tender, marinated chicken breast, grilled to perfection, is nestled between two soft buns with crisp lettuce, ripe tomatoes, and creamy avocado slices.", category: "lunch" },
        { id: 10, name: "Italian Sub", price: 7.75, image: "https://www.spendwithpennies.com/wp-content/uploads/2022/06/Italian-Sub-Sandwich-1-SpendWithPennies.com_.jpg", description: "Transport your taste buds to Italy with our flavorful Italian sub. Layers of thinly sliced Italian meats, including salami, pepperoni, and ham, are piled high on a fresh baguette. Topped with melted provolone cheese, crisp lettuce, juicy tomatoes, and tangy banana peppers.", category: "lunch" },
        { id: 11, name: "Veggie Burger", price: 11.25, image: "https://thecozyapron.com/wp-content/uploads/2022/02/veggie-burgers_thecozyapron_1-1000x1000.jpg", description: "Made from a savory blend of wholesome vegetables, beans, and grains, our veggie burger is packed with protein and flavor. Topped with fresh lettuce, ripe tomato slices, and creamy avocado, it's a satisfying option for both vegetarians and meat-lovers alike.", category: "lunch" },
        { id: 12, name: "Fish and Chips", price: 12.50, image: "https://www.thespruceeats.com/thmb/E3GtUWFG-qZkqYvNLBwy4vN-Cl4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beer-battered-fish-and-chips-3056420-hero-01-926ac8e7fe03422aaeb03518eac095d8.jpg", description: "Dive into a classic British favorite with our Fish and Chips. Tender fillets of flaky white fish, coated in a crisp and golden beer batter, are paired with a generous serving of crispy, golden-brown fries. Served with a side of tangy tartar sauce and a wedge of lemon.", category: "dinner" },
        { id: 13, name: "Crispy Chicken Tacos with Avocado Buttermilk Ranch", price: 10.50, image: "https://www.gimmesomeoven.com/wp-content/uploads/2020/05/Buttermilk-Ranch-Chicken-Tacos-Recipe-1-768x1152.jpg", description: "Treat your taste buds to a fiesta of flavors with our Crispy Chicken Tacos. Crispy breaded chicken strips are nestled in warm, soft tortillas and topped with crunchy cabbage slaw, diced tomatoes, and creamy avocado slices. Drizzled with a zesty avocado buttermilk ranch dressing and a squeeze of lime.", category: "dinner" },
        { id: 14, name: "Ultimate Meat Lasagna", price: 11.75, image: "https://www.jocooks.com/wp-content/uploads/2020/10/meat-lasagna-1-1.jpg", description: "Indulge in comfort food perfection with our Ultimate Meat Lasagna. Layers of al dente pasta sheets, rich tomato sauce, savory ground beef, and creamy ricotta cheese are lovingly stacked and baked to golden perfection. Topped with a blanket of melted mozzarella cheese and a sprinkle of fragrant herbs.", category: "dinner" },
        { id: 15, name: "Shrimp Alfredo", price: 12.25, image: "https://www.wellplated.com/wp-content/uploads/2021/10/Shrimp-Fettuccine-Alfredo-square-500x500.jpg", description: "Delight in the decadent flavors of our Shrimp Alfredo. Succulent shrimp are sautéed to perfection and served atop a bed of tender fettuccine pasta, coated in a velvety Alfredo sauce made with cream, butter, and Parmesan cheese. Garnished with freshly chopped parsley and a sprinkle of Parmesan.", category: "dinner" },
        { id: 16, name: "Vegetable Stir-Fry with Rice", price: 13.25, image: "https://www.recipetineats.com/wp-content/uploads/2021/02/Vegetable-Stir-Fry_1-2-500x500.jpg", description: "Savor the vibrant flavors of our Vegetable Stir Fry with Rice, a wholesome and satisfying dish perfect for vegetarians and veggie lovers alike. Crisp and colorful vegetables, such as bell peppers, broccoli, carrots, and snap peas, are stir-fried to perfection in a savory soy sauce-based glaze. Served atop a bed of fluffy steamed rice.", category: "dinner" },
        { id: 17, name: "Fudgy Cocoa Brownies", price: 3.50, image: "https://www.wellplated.com/wp-content/uploads/2021/01/Cocoa-Brownies-5-500x500.jpg", description: "Dive into rich, chocolatey goodness with our Fudgy Cocoa Brownies. These moist, cocoa-infused delights are perfect for satisfying your chocolate cravings.", category: "dessert" },
        { id: 18, name: "Pecan Pie", price: 4.25, image: "https://www.browneyedbaker.com/wp-content/uploads/2020/11/pecan-pie-5-1200.jpg", description: "Enjoy a taste of the South with our Pecan Pie. Each slice features a buttery crust filled with caramelized pecans, delivering a perfect blend of sweet and nutty flavors.", category: "dessert" },
        { id: 19, name: "Bread Pudding", price: 5.25, image: "https://www.jocooks.com/wp-content/uploads/2023/11/bread-pudding-1-6.jpg", description: "Experience comfort in every bite with our Bread Pudding. Made with tender bread soaked in a creamy custard, it's a warm and indulgent dessert that's sure to please.", category: "dessert" }
    ];

    const menuContainer = document.getElementById("menu");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cart = [];

    
    function displayMenu(category) {
        menuContainer.innerHTML = ""; 
        let itemsToDisplay = [];
        if (category === "all") {
            itemsToDisplay = menuItems;
        } else {
            itemsToDisplay = menuItems.filter(item => item.category === category);
        }
        itemsToDisplay.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                    <div class="menu-item-details">
                        <h3 class="menu-item-name">${item.name}</h3>
                        <p class="menu-item-description">${item.description}</p>
                        <p class="menu-item-price">$${item.price.toFixed(2)}</p>
                        <div class="quantity-controls">
                            <button class="decrease-quantity-btn" data-id="${item.id}">-</button>
                            <span class="quantity">0</span>
                            <button class="increase-quantity-btn" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    
    const categoryButtons = document.querySelectorAll(".category-btn");
    categoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.dataset.category;
            displayMenu(category);
        });
    });

   
    menuContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("increase-quantity-btn")) {
            const itemId = parseInt(event.target.getAttribute("data-id"));
            const quantitySpan = event.target.parentNode.querySelector(".quantity");
            const currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity < 10) {
                quantitySpan.textContent = currentQuantity + 1;
                updateCart(itemId, 1); // This add one to the cart 
            } else {
                alert("Maximum quantity reached (10).");
            }
        } else if (event.target.classList.contains("decrease-quantity-btn")) {
            const itemId = parseInt(event.target.getAttribute("data-id"));
            const quantitySpan = event.target.parentNode.querySelector(".quantity");
            const currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 0) {
                quantitySpan.textContent = currentQuantity - 1;
                updateCart(itemId, -1); // Remove one from the cart 
            } else {
                alert("Quantity cannot be less than 0.");
            }
        }
    });

    // Updates the cart 
    function updateCart(itemId, quantityChange) {
        const selectedItem = menuItems.find(item => item.id === itemId);
        const existingItem = cart.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.quantity += quantityChange;
            if (existingItem.quantity <= 0) {
                cart = cart.filter(item => item.id !== itemId); // Remove item if quantity becomes zero
            }
        } else {
            if (quantityChange > 0) {
                cart.push({ id: itemId, name: selectedItem.name, price: selectedItem.price, quantity: 1 });
            }
        }
        updateTotal();
    }

    function updateTotal() {
        let total = 0;
        let totalItems = "";
        cart.forEach(item => {
            total += item.price * item.quantity;
            totalItems += `${item.name} x${item.quantity}, `;
        });
        totalItems = totalItems.slice(0, -2); 
        totalSpan.textContent = `${total.toFixed(2)} (${totalItems})`;
    }

  
    checkoutBtn.addEventListener("click", function() {
        window.location.href = "checkout.html";
    });
});
