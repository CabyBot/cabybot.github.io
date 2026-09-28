// Thông tin pháp lý & cấu hình – sửa tại đây
export const company = {
  name: 'CabyBot',
  legalName: 'Tên pháp nhân / OSVČ của bạn',
  ico: '00000000', // ⚠️ điền IČO thật
  email: 'info@helpobot247.cz',
  formAction: 'https://formspree.io/f/YOUR_FORM_ID', // ⚠️ tạo form miễn phí tại formspree.io
  privacyUrl: '#',
};

// Giá CZK / tháng theo số ngôn ngữ [1, 2, 3]
export const prices = {
  basic: [1500, 2000, 2500],
  pro: [2900, 3500, 4200],
  vip: [4500, 5000, 5500],
};
export const planKeys = ['basic', 'pro', 'vip'] as const;
