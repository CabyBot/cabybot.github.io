// Thông tin pháp lý & cấu hình – sửa tại đây
export const company = {
  name: 'CabyBot',
  legalName: 'CabyBot',
  ico: '00000000',
  email: 'info@cabybot.cz',
  formAction: 'https://formspree.io/f/mdekyone',
  privacyUrl: '#',
};

// Giá CZK / tháng theo số ngôn ngữ [1, 2, 3]
export const prices = {
  basic: [1500, 2000, 2500],
  pro: [3000, 3500, 4200],
  vip: [4500, 5000, 5500],
};

// Phí khởi tạo một lần (CZK), theo số ngôn ngữ [1, 2, 3]
export const setupFees = {
  basic: [8000, 11000, 14000],
  pro: [15000, 20000, 25000],
  vip: [28000, 35000, 42000],
};

export const planKeys = ['basic', 'pro', 'vip'] as const;
