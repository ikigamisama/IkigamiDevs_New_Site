import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
	const cookieStore = cookies();
	const supabase = createClient(await cookieStore);

	const { data, error } = await supabase
		.from("Posts")
		.select(`*, Author(id, username, first_name, last_name, avatar_url)`)
		.like("category", "%Project%")
		.order("created_at", { ascending: false });

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	return NextResponse.json({ data }, { status: 200 });
}
