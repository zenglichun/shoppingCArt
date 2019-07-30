export const Add = (idx) => ({ type: 'addOne', idx});
export const Sub = (idx) => ({ type: 'subOne', idx});
export const Check = (idx) => ({type: 'checkValue', idx});
export const AddToShoppingCart = (idx) => ({type: 'addTo', idx});
export const ToDetail = (idx) => ({type: 'toDetail', idx});