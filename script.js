const products = [
  { id: 1, name: 'Молоко пастеризованное «Вологжанка» 1,5%', brand: 'Вологжанка', category: 'Молоко', desc: 'Лёгкое питьевое молоко, 930 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko15_1.jpg', price: 92 },
  { id: 2, name: 'Молоко пастеризованное «Вологжанка» 2,5%', brand: 'Вологжанка', category: 'Молоко', desc: 'Классическая жирность, 930 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko25_2.jpg', price: 96 },
  { id: 3, name: 'Молоко пастеризованное «Вологжанка» 2,5% (п/п)', brand: 'Вологжанка', category: 'Молоко', desc: 'Упаковка пюр-пак.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko25_3.jpg', price: 99 },
  { id: 4, name: 'Молоко пастеризованное «Вологжанка» 2,5% (470 г)', brand: 'Вологжанка', category: 'Молоко', desc: 'Компактный формат 470 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/moloko_470_2_5.jpg', price: 67 },
  { id: 5, name: 'Молоко пастеризованное «Вологжанка» 3,2%', brand: 'Вологжанка', category: 'Молоко', desc: 'Более насыщенный вкус.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko32.jpg', price: 102 },
  { id: 6, name: 'Молоко пастеризованное «Вологжанка» 3,2% (п/п)', brand: 'Вологжанка', category: 'Молоко', desc: 'Питьевое, 930 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko32_1.jpg', price: 105 },
  { id: 7, name: 'Молоко пастеризованное «Вологжанка» 3,2% бутылка', brand: 'Вологжанка', category: 'Молоко', desc: 'Формат ПЭТ-бутылка.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/milk32.jpg', price: 89 },
  { id: 8, name: 'Молоко топлёное «Вологжанка»', brand: 'Вологжанка', category: 'Молоко', desc: 'Нежный карамельный вкус.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/moloko_topl.jpg', price: 109 },
  { id: 9, name: 'Молоко ультрапастеризованное «Вологжанка» 2,5%', brand: 'Вологжанка', category: 'Молоко', desc: 'Длительный срок хранения.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko25_4.jpg', price: 112 },
  { id: 10, name: 'Молоко ультрапастеризованное «Вологжанка» 3,2%', brand: 'Вологжанка', category: 'Молоко', desc: 'Для кофе и каш.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko32_3.jpg', price: 116 },
  { id: 11, name: 'Молоко цельное «Вологжанка» 3,4–4,0%', brand: 'Вологжанка', category: 'Молоко', desc: 'Повышенная жирность.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko45.jpg', price: 123 },
  { id: 12, name: 'Сливки пастеризованные «Вологжанка» 10%', brand: 'Вологжанка', category: 'Сливки', desc: 'Нежные питьевые сливки.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Slivki05.jpg', price: 118 },
  { id: 13, name: 'Сливки пастеризованные «Вологжанка» 18%', brand: 'Вологжанка', category: 'Сливки', desc: 'Более густая текстура.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Slivki.jpg', price: 134 },
  { id: 14, name: 'Сметана «Вологжанка» 14%', brand: 'Вологжанка', category: 'Сметана', desc: 'Лёгкая сметана, 300 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Smetana14.jpg', price: 84 },
  { id: 15, name: 'Сметана «Вологжанка» 18% (470 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Семейный формат.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/smetana_18_470.jpg', price: 122 },
  { id: 16, name: 'Сметана «Вологжанка» 18% (300 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Классическая линейка.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Smetana2.jpg', price: 93 },
  { id: 17, name: 'Сметана «Вологжанка» 22% (200 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Более плотная консистенция.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/smetana_22_200.jpg', price: 88 },
  { id: 18, name: 'Сметана «Вологжанка» 22% (400 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Формат для семьи.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/smetana_22_400.jpg', price: 126 },
  { id: 19, name: 'Масло сливочное Бутербродное', brand: 'Вологжанка', category: 'Масло', desc: 'Удобно для завтрака.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Maslo_Buterbrodnoe_160_resized.jpg', price: 155 },
  { id: 20, name: 'Масло сливочное Вологодское', brand: 'Вологжанка', category: 'Масло', desc: 'Традиционный вкус.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Maslo_Vologodskoe_180_resized.jpg', price: 172 }
];

const state = {
  selectedCategory: 'Все',
  query: '',
  sortBy: 'popular',
  cart: new Map(),
  history: []
};

const grid = document.getElementById('productGrid');
const chips = document.getElementById('chips');
const search = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const resultCounter = document.getElementById('resultCounter');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalItems = document.getElementById('cartTotalItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const cartEmpty = document.getElementById('cartEmpty');
const historyList = document.getElementById('historyList');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutDialog = document.getElementById('checkoutDialog');
const closeDialog = document.getElementById('closeDialog');

const normalize = (value) => value.toLowerCase().replace(/ё/g, 'е').trim();
const formatPrice = (value) => `${new Intl.NumberFormat('ru-RU').format(value)} ₽`;

const levenshtein = (a, b) => {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
};

const typoMatch = (text, query) => {
  if (!query) return true;
  if (text.includes(query)) return true;
  return query.length > 4 && text.split(/\s+/).some((word) => levenshtein(word, query) <= 1);
};

const sorters = {
  popular: (items) => [...items],
  nameAsc: (items) => [...items].sort((a, b) => a.name.localeCompare(b.name, 'ru')),
  nameDesc: (items) => [...items].sort((a, b) => b.name.localeCompare(a.name, 'ru')),
  priceAsc: (items) => [...items].sort((a, b) => a.price - b.price),
  priceDesc: (items) => [...items].sort((a, b) => b.price - a.price)
};

function getFilteredProducts() {
  const filtered = products.filter((item) => {
    const categoryOk = state.selectedCategory === 'Все' || item.category === state.selectedCategory;
    const text = normalize(`${item.name} ${item.desc} ${item.brand} ${item.category}`);
    const queryOk = typoMatch(text, state.query);
    return categoryOk && queryOk;
  });
  return sorters[state.sortBy](filtered);
}

function renderProducts() {
  const items = getFilteredProducts();
  resultCounter.textContent = `Найдено товаров: ${items.length}`;

  if (!items.length) {
    grid.innerHTML = '<article class="panel-block"><h3>Ничего не найдено</h3><p class="hint">Попробуйте изменить запрос или категорию.</p></article>';
    return;
  }

  grid.innerHTML = items
    .map(
      (item) => `
      <article class="product-card" style="animation-delay:${(item.id % 8) * 0.03}s">
        <img loading="lazy" src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="badges">
          <span class="badge">${item.brand}</span>
          <span class="badge">${item.category}</span>
        </div>
        <div class="price-row">
          <span class="price">${formatPrice(item.price)}</span>
          <button type="button" data-add="${item.id}">В корзину</button>
        </div>
      </article>`
    )
    .join('');
}

function renderChips() {
  const categories = ['Все', ...new Set(products.map((item) => item.category))];
  chips.innerHTML = categories
    .map(
      (category) =>
        `<button type="button" class="chip ${category === state.selectedCategory ? 'active' : ''}" data-category="${category}">${category}</button>`
    )
    .join('');
}

function cartTotals() {
  let totalItems = 0;
  let totalPrice = 0;
  state.cart.forEach((qty, id) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    totalItems += qty;
    totalPrice += product.price * qty;
  });
  return { totalItems, totalPrice };
}

function renderCart() {
  const entries = [...state.cart.entries()];
  const { totalItems, totalPrice } = cartTotals();

  cartCount.textContent = String(totalItems);
  cartTotalItems.textContent = String(totalItems);
  cartTotalPrice.textContent = formatPrice(totalPrice);
  checkoutBtn.disabled = totalItems === 0;
  cartEmpty.style.display = entries.length ? 'none' : 'block';

  cartItems.innerHTML = entries
    .map(([id, qty]) => {
      const item = products.find((product) => product.id === id);
      if (!item) return '';
      return `
      <li class="cart-item">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-controls">
          <div class="qty-controls">
            <button type="button" class="qty-btn" data-dec="${id}">−</button>
            <span class="qty-value">${qty}</span>
            <button type="button" class="qty-btn" data-inc="${id}">+</button>
          </div>
          <strong>${formatPrice(item.price * qty)}</strong>
        </div>
      </li>`;
    })
    .join('');
}

function renderHistory() {
  if (!state.history.length) {
    historyList.innerHTML = '<li class="empty-history">Пока нет демо-заказов</li>';
    return;
  }

  historyList.innerHTML = state.history
    .map(
      (order) =>
        `<li class="cart-item"><div class="cart-item-title">Заказ #${order.id}</div><div class="hint">${order.items} тов. • ${formatPrice(order.total)}</div></li>`
    )
    .join('');
}

function bumpCartCounter() {
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth;
  cartCount.classList.add('bump');
}

function addToCart(productId) {
  state.cart.set(productId, (state.cart.get(productId) ?? 0) + 1);
  renderCart();
  bumpCartCounter();
}

function changeQty(productId, delta) {
  const next = (state.cart.get(productId) ?? 0) + delta;
  if (next <= 0) state.cart.delete(productId);
  else state.cart.set(productId, next);
  renderCart();
}

function seedDates() {
  const chipsRoot = document.getElementById('dateChips');
  const dates = ['Пн, 11 мар', 'Ср, 13 мар', 'Сб, 16 мар', 'Пн, 18 мар', 'Ср, 20 мар', 'Сб, 23 мар'];
  chipsRoot.innerHTML = dates.map((date) => `<span>${date}</span>`).join('');
}

search.addEventListener('input', () => {
  state.query = normalize(search.value);
  renderProducts();
});

sortSelect.addEventListener('change', () => {
  state.sortBy = sortSelect.value;
  renderProducts();
});

chips.addEventListener('click', (event) => {
  const chip = event.target.closest('[data-category]');
  if (!chip) return;
  state.selectedCategory = chip.dataset.category;
  renderChips();
  renderProducts();
});

grid.addEventListener('click', (event) => {
  const addBtn = event.target.closest('[data-add]');
  if (!addBtn) return;
  addToCart(Number(addBtn.dataset.add));
});

cartItems.addEventListener('click', (event) => {
  const inc = event.target.closest('[data-inc]');
  const dec = event.target.closest('[data-dec]');
  if (inc) changeQty(Number(inc.dataset.inc), 1);
  if (dec) changeQty(Number(dec.dataset.dec), -1);
});

checkoutBtn.addEventListener('click', () => {
  const { totalItems, totalPrice } = cartTotals();
  if (!totalItems) return;

  state.history.unshift({
    id: 1000 + state.history.length + 1,
    items: totalItems,
    total: totalPrice
  });
  state.cart.clear();
  renderCart();
  renderHistory();
  checkoutDialog.showModal();
});

closeDialog.addEventListener('click', () => checkoutDialog.close());

renderChips();
renderProducts();
renderCart();
renderHistory();
seedDates();
