import supabase from "../configSupa/supabaseConfiguration";

export const fetchData = async () => {
  const { data, error } = await supabase.from("Product-feedback-app").select();

  return data;
};

export default fetchData;
