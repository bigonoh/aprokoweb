/* eslint-disable no-useless-escape */
export const inputMasks = {
  phone: () => {
    "#phone".inputmask({ mask: "(999) 999-9999" });
  },
  numbers:
    "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(..*)./g, '$1');",
};
