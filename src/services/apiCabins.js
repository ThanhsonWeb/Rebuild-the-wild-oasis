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
	let imagePath;

	if (!newCabin.skipUpload) {
		const imageName = `${Date.now()}-${newCabin.image.name}`;
		const { error: storageError } = await supabase.storage
			.from("cabin-images")
			.upload(imageName, newCabin.image);

		if (storageError) throw new Error("Could not upload cabin image");

		imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	} else {
		imagePath = newCabin.image;
	}

	// Remove fields not in the DB schema 
	const { skipUpload, ...cabinData } = newCabin;

	const { data, error } = await supabase
		.from("cabins")
		.insert([{ ...cabinData, image: imagePath }]);

	if (error) throw new Error("Could not create a new cabin");

	return data;
}
