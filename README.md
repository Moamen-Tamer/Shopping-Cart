# Shopping-Cart
Practise Project:  Shopping Cart Program in JavaScript (Node.js) — calculate prices, taxes, discounts, and edit your cart dynamically.

---

- Arrays and Array methods (`reduce`, `filter`, `push`)
- Functions (including helper functions)
- User input with **prompt-sync**
- Control flow (loops, conditionals, recursion)
- Discounts, tax calculations, and cart editing

---

## 🚀 Features
- Calculate **cart price** with and without tax
- Apply **price-based discount** (10% off if total ≥ 900)
- Apply **tax discounts** with valid coupons
- Edit your cart (add or remove items dynamically)
- Change tax rate interactively
- Keeps track of **price history** before and after discounts

---

## 📦 Installation & Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/shopping-cart-calculator.git
   cd shopping-cart-calculator

2. Install dependencies:
   ```bash
   npm install prompt-sync

3. Run the program:
   ```bash
   node cart.js

---

## 🖥️ Example Run

  ```pgsql
  Price (without taxes): 175 $
  Tax: 26.25 $
  Price (with taxes): 201.25 $
  -----------------------------
  Price (with taxes): 201.25 $
  -----------------------------
  The new tax is: 0.20
  Tax: 35 $
  Price (with taxes): 210 $
  -----------------------------
  Do you need to edit your cart? yes
  add or remove: add
  you need to add: 50
  50 has been added to the cart.
  one more? no
  Thanks for using our function !
  -----------------------------
  Do you have a discount coupon? yes
  Enter you coupon: ABC1234
  you got a 33% discount on your taxes
  Price (with taxes): 220 $   ---into--->   210 $
  -----------------------------
  Thanks for using our program !
