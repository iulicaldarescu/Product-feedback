import supabase from "../configSupa/supabaseConfiguration";

const fetchData = async () => {
  const { data, error } = await supabase.from("Product-feedback-app").select();

  return data;
};

export default fetchData;
