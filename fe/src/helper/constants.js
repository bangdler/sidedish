export const icons = {
  mypage: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 11C13.9467 11 16.3334 8.61333 16.3334 5.66667C16.3334 2.72 13.9467 0.333334 11 0.333334C8.05337 0.333334 5.66671 2.72 5.66671 5.66667C5.66671 8.61333 8.05337 11 11 11ZM11 13.6667C7.44004 13.6667 0.333374 15.4533 0.333374 19V21.6667H21.6667V19C21.6667 15.4533 14.56 13.6667 11 13.6667Z"
        fill="#1B1B1B"
      />
    </svg>
  ),
  shoppingCart: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.33337 24C7.86671 24 6.68004 25.2 6.68004 26.6667C6.68004 28.1333 7.86671 29.3333 9.33337 29.3333C10.8 29.3333 12 28.1333 12 26.6667C12 25.2 10.8 24 9.33337 24ZM1.33337 2.66667V5.33333H4.00004L8.80004 15.4533L7.00004 18.72C6.78671 19.0933 6.66671 19.5333 6.66671 20C6.66671 21.4667 7.86671 22.6667 9.33337 22.6667H25.3334V20H9.89337C9.70671 20 9.56004 19.8533 9.56004 19.6667L9.60004 19.5067L10.8 17.3333H20.7334C21.7334 17.3333 22.6134 16.7867 23.0667 15.96L27.84 7.30667C27.95 7.10318 28.0054 6.87464 28.0007 6.64337C27.996 6.4121 27.9313 6.18601 27.8131 5.98718C27.6949 5.78836 27.5271 5.6236 27.3262 5.50899C27.1252 5.39439 26.898 5.33387 26.6667 5.33333H6.94671L5.69337 2.66667H1.33337ZM22.6667 24C21.2 24 20.0134 25.2 20.0134 26.6667C20.0134 28.1333 21.2 29.3333 22.6667 29.3333C24.1334 29.3333 25.3334 28.1333 25.3334 26.6667C25.3334 25.2 24.1334 24 22.6667 24Z"
        fill="#1B1B1B"
      />
    </svg>
  ),
  search: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.6667 18.6667H19.6133L19.24 18.3067C20.5918 16.7387 21.3348 14.7369 21.3333 12.6667C21.3333 10.9526 20.825 9.27695 19.8727 7.85172C18.9204 6.4265 17.5669 5.31567 15.9833 4.65971C14.3996 4.00375 12.6571 3.83212 10.9759 4.16653C9.29472 4.50093 7.75047 5.32635 6.53841 6.53841C5.32636 7.75046 4.50094 9.29471 4.16653 10.9759C3.83213 12.6571 4.00376 14.3996 4.65971 15.9833C5.31567 17.5669 6.4265 18.9204 7.85173 19.8727C9.27695 20.825 10.9526 21.3333 12.6667 21.3333C14.8133 21.3333 16.7867 20.5467 18.3067 19.24L18.6667 19.6133V20.6667L25.3333 27.32L27.32 25.3333L20.6667 18.6667ZM12.6667 18.6667C9.34667 18.6667 6.66667 15.9867 6.66667 12.6667C6.66667 9.34667 9.34667 6.66667 12.6667 6.66667C15.9867 6.66667 18.6667 9.34667 18.6667 12.6667C18.6667 15.9867 15.9867 18.6667 12.6667 18.6667Z"
        fill="#1B1B1B"
      />
    </svg>
  ),
};

export const gnbMenus = ['든든한 메인요리', '뜨끈한 국물요리', '정갈한 밑반찬'];
export const gnbSubMenus = [['육류 요리', '해산물 요리'], ['국/탕/찌개'], ['나물/무침', '조림/볶음', '절임/장아찌']];

export const buttonIcons = {
  left: (
    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L1 10L9 2" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  ),
  right: (
    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 18L10 10L2 2" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  ),
};

export const API = {
  exhibitions: `http://54.180.92.20:8080/api/exhibitions/2`,
  category: `http://54.180.92.20:8080/api/exhibitions/1`,
  categoryDishes: (id, page = 0) => {
    return `http://54.180.92.20:8080/api/sidedishes/category/${id}?page=${page}`;
  },
};
