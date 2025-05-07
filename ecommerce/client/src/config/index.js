export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "grinder", label: "Grinder" },
      { id: "adhesive", label: "Adhesive" },
      { id: "chemicals", label: "Chemicals" },
      { id: "bearings", label: "Bearings" },
      { id: "clothing", label: "Clothing" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "3M", label: "3M" },
      { id: "wurth", label: "Wurth" },
      { id: "kennedy", label: "Kennedy" },
      { id: "bosch", label: "Bosch" },
      { id: "dewalt", label: "Dewalt" },
      { id: "stanley", label: "" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "grinder",
    label: "Grinder",
    path: "/shop/listing",
  },
  {
    id: "adhesive",
    label: "Adhesive",
    path: "/shop/listing",
  },
  {
    id: "chemicals" , 
    label: "Chemicals",
    path: "/shop/listing",
  },
  {
    id: "bearings", 
    label: "Bearings",
    path: "/shop/listing",
  },
  {
     id: "clothing",
     label: "Clothing",
     path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Grinder",
  women: "Adhesive",
  kids: "Chemicals",
  accessories: "Bearings",
  footwear: "Clothing",
};

export const brandOptionsMap = {
  nike: "3M",
  adidas: "Wurth",
  puma: "Kennedy",
  levi: "Bosch",
  zara: "Dewalt",
  "h&m": "Stanley",
};

export const filterOptions = {
  category: [
    { id: "grinder", label: "Grinder" },
    { id: "adhesive", label: "Adhesive" },
    { id: "chemicals", label: "Chemicals" },
    { id: "bearings", label: "Bearings" },
    { id: "clothing", label: "Clothing" },
  ],
  brand: [
    { id: "3M", label: "3M" },
    { id: "wurth", label: "Wurth" },
    { id: "kennedy", label: "Kennedy" },
    { id: "bosch", label: "Bosch" },
    { id: "dewalt", label: "Dewalt" },
    { id: "stanley", label: "Stanley"},
],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
