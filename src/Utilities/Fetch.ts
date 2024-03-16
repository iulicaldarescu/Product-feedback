import supabase from "../configSupa/supabaseConfiguration";
import { TABLE_NAME } from "./CommonVariables";

export const fetchData = async () => {
  const { data } = await supabase
    .from(TABLE_NAME)
    .select()
    .eq("id", "7d2cce98-8c81-4da7-825b-c9affbff1a17");

  return data;
};

export default fetchData;
