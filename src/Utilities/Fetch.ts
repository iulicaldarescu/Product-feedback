import supabase from "../configSupa/supabaseConfiguration";

export const fetchData = async () => {
  const { data, error } = await supabase
    .from("Product-feedback-app")
    .select()
    .eq("id", "90813cf7-fdee-4f10-aef5-ce2c1950c9c3");

  return data;
};

export default fetchData;
