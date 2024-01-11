import supabase from "../configSupa/supabaseConfiguration";

export const fetchData = async () => {
  const { data, error } = await supabase.from("Product-feedback-app").select();

  return data;
};

type updateData = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export const updateData = async ({
  id,
  title,
  description,
  category,
}: updateData) => {
  const { error } = await supabase
    .from("Product-feedback-app")
    .update({
      productRequests: {
        title: title,
        description: description,
        category: category,
      },
    })
    .eq("id", id);
};

export default fetchData;
