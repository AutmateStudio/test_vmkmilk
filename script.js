const products = [
  { id: 1, name: 'Молоко пастеризованное «Вологжанка» 1,5%', brand: 'Вологжанка', category: 'Молоко', desc: 'Лёгкое питьевое молоко, 930 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko15_1.jpg', price: 92, specs: ['930 г', '1.5%', 'пастеризованное'] },
  { id: 2, name: 'Молоко пастеризованное «Вологжанка» 2,5%', brand: 'Вологжанка', category: 'Молоко', desc: 'Классическая жирность, 930 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko25_2.jpg', price: 96, specs: ['930 г', '2.5%', 'пастеризованное'] },
  { id: 3, name: 'Молоко пастеризованное «Вологжанка» 2,5% (п/п)', brand: 'Вологжанка', category: 'Молоко', desc: 'Упаковка пюр-пак.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko25_3.jpg', price: 99, specs: ['930 г', '2.5%', 'пюр-пак'] },
  { id: 4, name: 'Молоко пастеризованное «Вологжанка» 2,5% (470 г)', brand: 'Вологжанка', category: 'Молоко', desc: 'Компактный формат 470 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/moloko_470_2_5.jpg', price: 67, specs: ['470 г', '2.5%', 'пастеризованное'] },
  { id: 5, name: 'Молоко пастеризованное «Вологжанка» 3,2%', brand: 'Вологжанка', category: 'Молоко', desc: 'Более насыщенный вкус.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko32.jpg', price: 102, specs: ['930 г', '3.2%', 'пастеризованное'] },
  { id: 6, name: 'Молоко пастеризованное «Вологжанка» 3,2% (п/п)', brand: 'Вологжанка', category: 'Молоко', desc: 'Питьевое, 930 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko32_1.jpg', price: 105, specs: ['930 г', '3.2%', 'пюр-пак'] },
  { id: 7, name: 'Молоко пастеризованное «Вологжанка» 3,2% бутылка', brand: 'Вологжанка', category: 'Молоко', desc: 'Формат ПЭТ-бутылка.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/milk32.jpg', price: 89, specs: ['930 г', '3.2%', 'ПЭТ'] },
  { id: 8, name: 'Молоко топлёное «Вологжанка»', brand: 'Вологжанка', category: 'Молоко', desc: 'Нежный карамельный вкус.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/moloko_topl.jpg', price: 109, specs: ['930 г', '3.2%', 'топлёное'] },
  { id: 9, name: 'Молоко ультрапастеризованное «Вологжанка» 2,5%', brand: 'Вологжанка', category: 'Молоко', desc: 'Длительный срок хранения.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko25_4.jpg', price: 112, specs: ['950 г', '2.5%', 'ультра'] },
  { id: 10, name: 'Молоко ультрапастеризованное «Вологжанка» 3,2%', brand: 'Вологжанка', category: 'Молоко', desc: 'Для кофе и каш.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko32_3.jpg', price: 116, specs: ['950 г', '3.2%', 'ультра'] },
  { id: 11, name: 'Молоко цельное «Вологжанка» 3,4–4,0%', brand: 'Вологжанка', category: 'Молоко', desc: 'Повышенная жирность.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Moloko45.jpg', price: 123, specs: ['930 г', '3.4-4%', 'цельное'] },
  { id: 12, name: 'Сливки пастеризованные «Вологжанка» 10%', brand: 'Вологжанка', category: 'Сливки', desc: 'Нежные питьевые сливки.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Slivki05.jpg', price: 118, specs: ['500 г', '10%', 'пастеризованные'] },
  { id: 13, name: 'Сливки пастеризованные «Вологжанка» 18%', brand: 'Вологжанка', category: 'Сливки', desc: 'Более густая текстура.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Slivki.jpg', price: 134, specs: ['500 г', '18%', 'пастеризованные'] },
  { id: 14, name: 'Сметана «Вологжанка» 14%', brand: 'Вологжанка', category: 'Сметана', desc: 'Лёгкая сметана, 300 г.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Smetana14.jpg', price: 84, specs: ['300 г', '14%', 'сметана'] },
  { id: 15, name: 'Сметана «Вологжанка» 18% (470 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Семейный формат.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/smetana_18_470.jpg', price: 122, specs: ['470 г', '18%', 'сметана'] },
  { id: 16, name: 'Сметана «Вологжанка» 18% (300 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Классическая линейка.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Smetana2.jpg', price: 93, specs: ['300 г', '18%', 'сметана'] },
  { id: 17, name: 'Сметана «Вологжанка» 22% (200 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Более плотная консистенция.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/smetana_22_200.jpg', price: 88, specs: ['200 г', '22%', 'сметана'] },
  { id: 18, name: 'Сметана «Вологжанка» 22% (400 г)', brand: 'Вологжанка', category: 'Сметана', desc: 'Формат для семьи.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/smetana_22_400.jpg', price: 126, specs: ['400 г', '22%', 'сметана'] },
  { id: 19, name: 'Масло сливочное Бутербродное', brand: 'Вологжанка', category: 'Масло', desc: 'Удобно для завтрака.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Maslo_Buterbrodnoe_160_resized.jpg', price: 155, specs: ['160 г', 'бутербродное', 'сливочное'] },
  { id: 20, name: 'Масло сливочное Вологодское', brand: 'Вологжанка', category: 'Масло', desc: 'Традиционный вкус.', img: 'https://vmkmilk.ru/images/thumbs/Tovary/300x300/Maslo_Vologodskoe_180_resized.jpg', price: 172, specs: ['180 г', 'вологодское', 'сливочное'] }
];

const state = {
  products,
  cart: { items: loadCart() },
  delivery: {
    selectedDate: '',
    addresses: loadAddresses(),
    selectedAddressId: '',
    editAddressId: null
  },
  history: loadHistory(),
  ui: {
    searchQuery: '',
    selectedCategories: [...new Set(products.map((item) => item.category))],
    sortBy: 'popular',
    gridColumns: '2',
    cartOpen: false,
    quickViewOpen: false,
    quickViewProductId: null,
    menuOpen: false,
    filtersOpen: false
  }
};

const els = {
  smartHeader: document.getElementById('smartHeader'),
  searchInput: document.getElementById('searchInput'),
  filtersBtn: document.getElementById('filtersBtn'),
  menuBtn: document.getElementById('menuBtn'),
  productGrid: document.getElementById('productGrid'),
  resultCounter: document.getElementById('resultCounter'),
  cartFab: document.getElementById('cartFab'),
  cartFabCount: document.getElementById('cartFabCount'),
  cartFabSum: document.getElementById('cartFabSum'),
  cartDialog: document.getElementById('cartDialog'),
  cartItems: document.getElementById('cartItems'),
  cartEmpty: document.getElementById('cartEmpty'),
  cartTotalItems: document.getElementById('cartTotalItems'),
  cartTotalPrice: document.getElementById('cartTotalPrice'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  menuDialog: document.getElementById('menuDialog'),
  filtersDialog: document.getElementById('filtersDialog'),
  categoryFilters: document.getElementById('categoryFilters'),
  quickViewDialog: document.getElementById('quickViewDialog'),
  quickViewBody: document.getElementById('quickViewBody'),
  historyList: document.getElementById('historyList'),
  dateChips: document.getElementById('dateChips'),
  addressSelect: document.getElementById('addressSelect'),
  addressSelectTrigger: document.getElementById('addressSelectTrigger'),
  addressSelectList: document.getElementById('addressSelectList'),
  editAddressBtn: document.getElementById('editAddressBtn'),
  addressDialog: document.getElementById('addressDialog'),
  addressNameInput: document.getElementById('addressNameInput'),
  addressInput: document.getElementById('addressInput'),
  addressExtraInput: document.getElementById('addressExtraInput'),
  saveAddressBtn: document.getElementById('saveAddressBtn'),
  cancelAddressBtn: document.getElementById('cancelAddressBtn'),
  gridToggle: document.getElementById('gridToggle'),
  checkoutDialog: document.getElementById('checkoutDialog'),
  closeDialog: document.getElementById('closeDialog')
};

const overlayStack = [];
const lastTrigger = {};
const debounce = (fn, ms = 200) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
};

const sorters = {
  popular: (items) => [...items],
  nameAsc: (items) => [...items].sort((a, b) => a.name.localeCompare(b.name, 'ru')),
  nameDesc: (items) => [...items].sort((a, b) => b.name.localeCompare(a.name, 'ru')),
  priceAsc: (items) => [...items].sort((a, b) => a.price - b.price),
  priceDesc: (items) => [...items].sort((a, b) => b.price - a.price)
};

function loadCart() {
  try {
    const raw = localStorage.getItem('vmkmilk-cart-v2');
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem('vmkmilk-cart-v2', JSON.stringify(state.cart.items));
}

function loadAddresses() {
  try {
    const raw = localStorage.getItem('vmkmilk-addresses-v1');
    if (!raw) return [{ id: crypto.randomUUID(), name: 'Дом', address: 'Вологда, ул. Ленина, 10', extra: '' }];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : [{ id: crypto.randomUUID(), name: 'Дом', address: 'Вологда, ул. Ленина, 10', extra: '' }];
  } catch {
    return [{ id: crypto.randomUUID(), name: 'Дом', address: 'Вологда, ул. Ленина, 10', extra: '' }];
  }
}

function saveAddresses() {
  localStorage.setItem('vmkmilk-addresses-v1', JSON.stringify(state.delivery.addresses));
}

function saveHistory() {
  document.cookie = `vmkmilk-history=${encodeURIComponent(JSON.stringify(state.history))}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

function loadHistory() {
  try {
    const value = document.cookie
      .split('; ')
      .find((item) => item.startsWith('vmkmilk-history='))
      ?.split('=')[1];
    if (!value) return [];
    const parsed = JSON.parse(decodeURIComponent(value));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getSelectedAddress() {
  return state.delivery.addresses.find((item) => item.id === state.delivery.selectedAddressId) ?? null;
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function formatPrice(price) {
  return `${new Intl.NumberFormat('ru-RU').format(price)} ₽`;
}

function getQty(productId) {
  return state.cart.items[productId] ?? 0;
}

function cartTotals() {
  let totalQty = 0;
  let totalSum = 0;
  for (const [id, qty] of Object.entries(state.cart.items)) {
    const product = state.products.find((item) => item.id === Number(id));
    if (!product) continue;
    totalQty += qty;
    totalSum += qty * product.price;
  }
  return { totalQty, totalSum };
}

function getVisibleProducts() {
  const q = normalize(state.ui.searchQuery);
  const filtered = state.products.filter((item) => {
    const categoryOk = state.ui.selectedCategories.includes(item.category);
    const queryText = normalize(`${item.name} ${item.brand} ${item.category} ${item.desc}`);
    return categoryOk && (!q || queryText.includes(q));
  });
  return sorters[state.ui.sortBy](filtered);
}

function stepperMarkup(id, qty) {
  return `<div class="stepper" data-stepper="${id}">
      <button type="button" data-dec="${id}" aria-label="Уменьшить количество">−</button>
      <span>${qty}</span>
      <button type="button" data-inc="${id}" aria-label="Увеличить количество">+</button>
    </div>`;
}

function renderProducts() {
  els.productGrid.dataset.columns = state.ui.gridColumns;
  const items = getVisibleProducts();
  els.resultCounter.textContent = items.length
    ? `Найдено товаров: ${items.length}`
    : 'Ничего не нашли. Попробуйте другое слово';

  if (!items.length) {
    els.productGrid.innerHTML = '<article class="product-card"><h3>Пусто</h3><p>Попробуйте изменить запрос или фильтры.</p></article>';
    return;
  }

  els.productGrid.innerHTML = items.map((item) => {
    const qty = getQty(item.id);
    return `<article class="product-card" tabindex="0" role="button" data-open-quick="${item.id}" aria-label="Открыть детали ${item.name}">
      <img loading="lazy" src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="meta-row">
        <span class="price">${formatPrice(item.price)}</span>
        ${qty > 0 ? stepperMarkup(item.id, qty) : `<button type="button" class="add-btn" data-add="${item.id}">Добавить</button>`}
      </div>
    </article>`;
  }).join('');
}

function renderFiltersRadios() {
  const active = state.ui.sortBy;
  els.filtersDialog.querySelectorAll('input[name="sort"]').forEach((radio) => {
    radio.checked = radio.value === active;
  });
}

function renderCategoryFilters() {
  const categories = [...new Set(state.products.map((item) => item.category))];
  els.categoryFilters.innerHTML = categories.map((category) => `
    <label><input type="checkbox" data-filter-category="${category}" ${state.ui.selectedCategories.includes(category) ? 'checked' : ''}/> ${category}</label>
  `).join('');
}

function renderAddresses() {
  if (!state.delivery.selectedAddressId) state.delivery.selectedAddressId = state.delivery.addresses[0]?.id || '';
  const selected = getSelectedAddress();
  els.addressSelectTrigger.textContent = selected ? selected.name : 'Выберите адрес';
  els.editAddressBtn.disabled = !selected;
  els.addressSelectList.innerHTML = `${state.delivery.addresses.map((address) => `<li><button type="button" role="option" data-address-id="${address.id}" class="address-option ${address.id === state.delivery.selectedAddressId ? 'active' : ''}">${address.name}</button></li>`).join('')}<li><button type="button" class="address-option address-option--add" data-add-address>+ Добавить адрес</button></li>`;
}

function openAddressDialog(address = null) {
  state.delivery.editAddressId = address?.id ?? null;
  els.addressNameInput.value = address?.name ?? '';
  els.addressInput.value = address?.address ?? '';
  els.addressExtraInput.value = address?.extra ?? '';
  els.addressDialog.showModal();
}

function renderDateSelection() {
  els.dateChips.querySelectorAll('button[data-date]').forEach((button) => {
    button.classList.toggle('active', button.dataset.date === state.delivery.selectedDate);
  });
}

function renderCart() {
  const entries = Object.entries(state.cart.items).filter(([, qty]) => qty > 0);
  const { totalQty, totalSum } = cartTotals();

  els.cartFabCount.textContent = String(totalQty);
  els.cartFabSum.textContent = formatPrice(totalSum);
  els.cartTotalItems.textContent = String(totalQty);
  els.cartTotalPrice.textContent = formatPrice(totalSum);
  els.cartEmpty.style.display = entries.length ? 'none' : 'block';
  els.checkoutBtn.disabled = totalQty === 0 || !state.delivery.selectedDate || !state.delivery.selectedAddressId;

  els.cartItems.innerHTML = entries.map(([id, qty]) => {
    const item = state.products.find((product) => product.id === Number(id));
    if (!item) return '';
    return `<li class="cart-item">
      <strong>${item.name}</strong>
      <div class="cart-line">
        ${stepperMarkup(item.id, qty)}
        <span>${formatPrice(item.price * qty)}</span>
      </div>
      <button class="remove-btn" type="button" data-remove="${item.id}" aria-label="Удалить ${item.name}">Удалить</button>
    </li>`;
  }).join('');
}

function renderHistory() {
  if (!state.history.length) {
    els.historyList.innerHTML = '<li class="empty-history">Пока нет демо-заказов</li>';
    return;
  }
  els.historyList.innerHTML = state.history.map((order) => `<li class="cart-item">
    <strong>Заказ #${order.id}</strong>
    <span>${order.items} тов. • ${formatPrice(order.total)}</span>
    <button type="button" class="secondary" data-repeat-order="${order.id}">Повторить покупку</button>
  </li>`).join('');
}

function renderQuickView() {
  const id = state.ui.quickViewProductId;
  const product = state.products.find((item) => item.id === id);
  if (!product) return;
  const qty = getQty(id);

  els.quickViewBody.innerHTML = `
    <div class="sheet__header">
      <h2 id="quickTitle">${product.name}</h2>
      <button type="button" class="icon-close" data-close="quick">✕</button>
    </div>
    <img class="quick-view__img" src="${product.img}" alt="${product.name}" />
    <strong class="price">${formatPrice(product.price)}</strong>
    <div class="quick-view__meta">${product.specs.map((spec) => `<span>${spec}</span>`).join('')}</div>
    <p>${product.desc}</p>
    <p><strong>Бренд:</strong> ${product.brand}</p>
    <p><strong>Категория:</strong> ${product.category}</p>
    <p>Демо-описание товара для быстрого просмотра.</p>
    <div class="cart-line">
      ${qty > 0 ? stepperMarkup(product.id, qty) : `<button type="button" class="add-btn" data-add="${product.id}">Добавить</button>`}
      <button type="button" class="secondary" data-open-cart>Открыть корзину</button>
    </div>
  `;
}

function bumpFab() {
  els.cartFab.classList.remove('bump');
  void els.cartFab.offsetWidth;
  els.cartFab.classList.add('bump');
}

function setQty(productId, qty) {
  if (qty <= 0) delete state.cart.items[productId];
  else state.cart.items[productId] = qty;
  saveCart();
  renderProducts();
  renderCart();
  if (state.ui.quickViewOpen) renderQuickView();
  bumpFab();
}

function changeQty(productId, delta) {
  setQty(productId, getQty(productId) + delta);
}

function openOverlay(id, triggerEl) {
  if (id === 'cart' && state.ui.cartOpen) return;
  if (id === 'quick' && state.ui.quickViewOpen) return;
  if (id === 'menu' && state.ui.menuOpen) return;
  if (id === 'filters' && state.ui.filtersOpen) return;

  if (triggerEl) lastTrigger[id] = triggerEl;

  if (id === 'cart') {
    state.ui.cartOpen = true;
    els.cartDialog.showModal();
  }
  if (id === 'quick') {
    state.ui.quickViewOpen = true;
    renderQuickView();
    els.quickViewDialog.showModal();
  }
  if (id === 'menu') {
    state.ui.menuOpen = true;
    els.menuDialog.showModal();
  }
  if (id === 'filters') {
    state.ui.filtersOpen = true;
    renderFiltersRadios();
    els.filtersDialog.showModal();
  }

  history.pushState({ overlay: id }, '');
  overlayStack.push(id);
}

function closeOverlay(id, fromPop = false) {
  if (id === 'cart' && state.ui.cartOpen) {
    state.ui.cartOpen = false;
    els.cartDialog.close();
  }
  if (id === 'quick' && state.ui.quickViewOpen) {
    state.ui.quickViewOpen = false;
    state.ui.quickViewProductId = null;
    els.quickViewDialog.close();
  }
  if (id === 'menu' && state.ui.menuOpen) {
    state.ui.menuOpen = false;
    els.menuDialog.close();
  }
  if (id === 'filters' && state.ui.filtersOpen) {
    state.ui.filtersOpen = false;
    els.filtersDialog.close();
  }

  if (!fromPop) {
    const last = overlayStack[overlayStack.length - 1];
    if (last === id) history.back();
  } else {
    if (lastTrigger[id]) lastTrigger[id].focus();
  }
}

function seedDates() {
  const dates = ['Пн, 11 мар', 'Ср, 13 мар', 'Сб, 16 мар', 'Пн, 18 мар', 'Ср, 20 мар', 'Сб, 23 мар'];
  if (!state.delivery.selectedDate) state.delivery.selectedDate = dates[0];
  els.dateChips.innerHTML = dates.map((date) => `<button type="button" data-date="${date}">${date}</button>`).join('');
  renderDateSelection();
}

function handleSmartHeader() {
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current <= 0) {
      els.smartHeader.classList.remove('header--hidden');
      lastY = current;
      return;
    }

    const scrollingDown = current > lastY;
    if (scrollingDown && current > 64) els.smartHeader.classList.add('header--hidden');
    if (!scrollingDown && Math.abs(current - lastY) > 10) els.smartHeader.classList.remove('header--hidden');
    lastY = current;
  }, { passive: true });
}

els.searchInput.addEventListener('input', debounce(() => {
  state.ui.searchQuery = els.searchInput.value;
  renderProducts();
}, 180));

els.menuBtn.addEventListener('click', (event) => openOverlay('menu', event.currentTarget));
els.filtersBtn.addEventListener('click', (event) => openOverlay('filters', event.currentTarget));
els.cartFab.addEventListener('click', (event) => openOverlay('cart', event.currentTarget));

els.menuDialog.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-menu-open]');
  if (!btn) return;
  closeOverlay('menu');
  openOverlay(btn.dataset.menuOpen, els.menuBtn);
});

els.filtersDialog.addEventListener('change', (event) => {
  const radio = event.target.closest('input[name="sort"]');
  const checkbox = event.target.closest('input[data-filter-category]');
  if (radio) state.ui.sortBy = radio.value;
  if (checkbox) {
    const next = els.filtersDialog.querySelectorAll('input[data-filter-category]:checked');
    if (!next.length) {
      checkbox.checked = true;
      return;
    }
    state.ui.selectedCategories = [...next].map((item) => item.dataset.filterCategory);
  }
  renderProducts();
});

els.gridToggle.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-grid]');
  if (!btn) return;
  state.ui.gridColumns = btn.dataset.grid;
  els.gridToggle.querySelectorAll('button').forEach((button) => button.classList.toggle('active', button === btn));
  renderProducts();
});

els.dateChips.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-date]');
  if (!btn) return;
  state.delivery.selectedDate = btn.dataset.date;
  renderDateSelection();
});

els.addressSelectTrigger.addEventListener('click', () => {
  const expanded = els.addressSelect.dataset.open === 'true';
  els.addressSelect.dataset.open = expanded ? 'false' : 'true';
  els.addressSelect.setAttribute('aria-expanded', expanded ? 'false' : 'true');
});

els.addressSelectList.addEventListener('click', (event) => {
  const selectBtn = event.target.closest('[data-address-id]');
  const addBtn = event.target.closest('[data-add-address]');
  if (selectBtn) {
    state.delivery.selectedAddressId = selectBtn.dataset.addressId;
    renderAddresses();
  }
  if (addBtn) openAddressDialog();
  els.addressSelect.dataset.open = 'false';
  els.addressSelect.setAttribute('aria-expanded', 'false');
});

els.editAddressBtn.addEventListener('click', () => {
  const address = getSelectedAddress();
  if (!address) return;
  openAddressDialog(address);
});

els.saveAddressBtn.addEventListener('click', () => {
  const name = els.addressNameInput.value.trim();
  const address = els.addressInput.value.trim();
  const extra = els.addressExtraInput.value.trim();
  if (!name || !address) return;

  if (state.delivery.editAddressId) {
    state.delivery.addresses = state.delivery.addresses.map((item) => (item.id === state.delivery.editAddressId ? {
      ...item,
      name,
      address,
      extra
    } : item));
  } else {
    const newAddress = { id: crypto.randomUUID(), name, address, extra };
    state.delivery.addresses.push(newAddress);
    state.delivery.selectedAddressId = newAddress.id;
  }

  state.delivery.editAddressId = null;
  saveAddresses();
  renderAddresses();
  els.addressDialog.close();
});

els.cancelAddressBtn.addEventListener('click', () => {
  state.delivery.editAddressId = null;
  els.addressDialog.close();
  renderAddresses();
});

els.productGrid.addEventListener('click', (event) => {
  const addBtn = event.target.closest('[data-add]');
  if (addBtn) {
    event.stopPropagation();
    changeQty(Number(addBtn.dataset.add), 1);
    return;
  }

  const stepperBtn = event.target.closest('[data-inc], [data-dec]');
  if (stepperBtn) {
    event.stopPropagation();
    if (stepperBtn.dataset.inc) changeQty(Number(stepperBtn.dataset.inc), 1);
    if (stepperBtn.dataset.dec) changeQty(Number(stepperBtn.dataset.dec), -1);
    return;
  }

  const card = event.target.closest('[data-open-quick]');
  if (!card) return;
  state.ui.quickViewProductId = Number(card.dataset.openQuick);
  openOverlay('quick', card);
});

els.productGrid.addEventListener('keydown', (event) => {
  const card = event.target.closest('[data-open-quick]');
  if (!card) return;
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    state.ui.quickViewProductId = Number(card.dataset.openQuick);
    openOverlay('quick', card);
  }
});

function handleStepperActions(root) {
  root.addEventListener('click', (event) => {
    const inc = event.target.closest('[data-inc]');
    const dec = event.target.closest('[data-dec]');
    const remove = event.target.closest('[data-remove]');
    const openCartBtn = event.target.closest('[data-open-cart]');
    const repeatOrderBtn = event.target.closest('[data-repeat-order]');
    if (inc) changeQty(Number(inc.dataset.inc), 1);
    if (dec) changeQty(Number(dec.dataset.dec), -1);
    if (remove) setQty(Number(remove.dataset.remove), 0);
    if (openCartBtn) openOverlay('cart', els.cartFab);
    if (repeatOrderBtn) {
      const order = state.history.find((item) => item.id === Number(repeatOrderBtn.dataset.repeatOrder));
      if (!order) return;
      state.cart.items = { ...order.cartItems };
      saveCart();
      renderCart();
      renderProducts();
    }
  });
}

handleStepperActions(els.cartDialog);
handleStepperActions(els.quickViewDialog);

document.addEventListener('click', (event) => {
  const insideAddress = event.target.closest('#addressSelect');
  if (!insideAddress && els.addressSelect.dataset.open === 'true') {
    els.addressSelect.dataset.open = 'false';
    els.addressSelect.setAttribute('aria-expanded', 'false');
  }

  const closeBtn = event.target.closest('[data-close]');
  if (!closeBtn) return;
  const map = { cart: 'cart', quick: 'quick', menu: 'menu', filters: 'filters' };
  closeOverlay(map[closeBtn.dataset.close]);
});

[els.cartDialog, els.quickViewDialog, els.menuDialog, els.filtersDialog, els.addressDialog].forEach((dialog) => {
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    if (dialog === els.addressDialog) {
      state.delivery.editAddressId = null;
      dialog.close();
      renderAddresses();
      return;
    }
    const id =
      dialog === els.cartDialog ? 'cart' :
      dialog === els.quickViewDialog ? 'quick' :
      dialog === els.menuDialog ? 'menu' : 'filters';
    closeOverlay(id);
  });
});

window.addEventListener('popstate', () => {
  const id = overlayStack.pop();
  if (!id) return;
  closeOverlay(id, true);
});

els.checkoutBtn.addEventListener('click', () => {
  const { totalQty, totalSum } = cartTotals();
  if (!totalQty || !state.delivery.selectedDate || !state.delivery.selectedAddressId) return;

  state.history.unshift({
    id: 1000 + state.history.length + 1,
    items: totalQty,
    total: totalSum,
    cartItems: { ...state.cart.items }
  });
  saveHistory();
  state.cart.items = {};
  saveCart();
  renderCart();
  renderProducts();
  renderHistory();
  els.checkoutDialog.showModal();
});

els.closeDialog.addEventListener('click', () => els.checkoutDialog.close());

seedDates();
renderFiltersRadios();
renderCategoryFilters();
renderAddresses();
renderProducts();
renderCart();
renderHistory();
handleSmartHeader();
