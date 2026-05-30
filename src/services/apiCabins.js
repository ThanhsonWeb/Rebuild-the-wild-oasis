import { supabase, supabaseUrl } from "./supabase";

export async function getCabins() {
	// read all cabins table from supabase
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) throw new Error("Could not fetch cabins");

	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) throw new Error("Couldn't Delete Cabin");

	return data;
}

//https://cmzzfqlehqfrztjvsxrk.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

export async function createCabin(newCabin) {
	//1. generate unique name
	const imageName = `${Math.random()}-${newCabin.image.name}`;

	//2. Upload the file to Supabase storage
	const { error: storageError } = await supabase.storage
		.from("cabin-images") // bucket name
		.upload(imageName, newCabin.image); // file

	if (storageError) throw new Error("Could not upload cabin image");

	// 3. Supabase then gives you a public URL to access that file.
	const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	// 4. Insert image to database
	const { data, error } = await supabase
		.from("cabins")
		.insert([{ ...newCabin, image: imagePath }]);

	if (error) throw new Error("Could not create a new cabin");

	return data;
}
