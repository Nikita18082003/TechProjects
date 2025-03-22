# TechProjects
Task of Web development internship given by TechnoHacks

🛍️ Product Card Design

📌 Overview

This project is a responsive product card designed using HTML & CSS. The card displays a product image, title, description, and price in a visually appealing layout. It is perfect for e-commerce websites, landing pages, and UI components.

🚀 Features

✅ Modern & Clean UI – Simple and professional design.

✅ Responsive Layout – Adapts to different screen sizes.

✅ Pure HTML & CSS – No external frameworks required.

✅ Hover Effects – Interactive styling for better UX.

✅ Reusable Component – Can be easily modified and integrated.


🛠️ Technologies Used

HTML5 – For structuring the product card.

CSS3 – For styling and responsiveness.

📜 Example Code


🖥️ Project Code (product3.html)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Page</title>
    <style>
        .product-container {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 50px;
        }
        .product {
            text-align: center;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 10px;
            width: 300px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        .product img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
        .buy-btn {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 15px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .buy-btn:hover {
            background-color: #0056b3;
        }
        .offer {
            color: red;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <div class="product-container">
        <!-- Laptop Product -->
        <div class="product">
            <img src="laptops.jpg" alt="Modern Laptop">
            <h2>Modern Laptop</h2>
            <p>A high-performance laptop with sleek design and powerful specs.</p>
            <h3 style="color: green;">Rs. 89,000</h3>
            
            <!-- Offer for Laptop -->
            <p class="offer">🔥 Flat 10% Off for First 50 Customers!</p>
            
            <a href="#" class="buy-btn">Buy Now</a>
        </div>

        <!-- Smartphone Product -->
        <div class="product">
            <img src="apple.jpg" alt="Latest Smartphone">
            <h2>Latest Smartphone</h2>
            <p>A sleek and powerful smartphone with the latest features and AI technology.</p>
            <h3 style="color: green;">Rs. 42,000</h3>
            
            <!-- Offer for Smartphone -->
            <p class="offer">🎁 Free Wireless Earbuds!</p>
            
            <a href="#" class="buy-btn">Buy Now</a>
        </div>
    </div>

</body>
</html>


🔧 Future Improvements

🔹 Add "Buy Now" and "Add to Cart" buttons.

🔹 Improve mobile responsiveness with better styling.

🔹 Add animations and hover effects.



📢 Connect with Me

🔗 GitHub: https://github.com/Nikita18082003

🔗 LinkedIn: www.linkedin.com/in/nikita-borkar-790277270

