const Test = {
  cmp: (id) => {
    return (cmp) => cmp.props().testID === id;
  },
};

export default Test;
