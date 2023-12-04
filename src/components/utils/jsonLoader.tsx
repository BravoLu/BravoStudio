const JsonLoader = async (filename: string): Promise<any> => {
  try {
    const resp = await fetch(filename);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("error: ", error);
  }
};

export default JsonLoader;
