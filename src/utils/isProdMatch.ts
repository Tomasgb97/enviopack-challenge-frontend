export const isMatch = (name1: string, name2: string) => {
  return name1.toLocaleLowerCase().includes(name2.toLocaleLowerCase());
};
