import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
    // await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    try {
        return NextResponse.json(
            { success: true, message: "GET request successful. Nice you got here.", id },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// OPTIONS Request (Pre-flight Handling for CORS)
export async function OPTIONS(req) {
    return NextResponse.json(
        { success: true, message: "OPTIONS request successful. Nice you got here." },
        { status: 200 }
    );
}

/**
 * return NextResponse.json(
        { success: true, message: "OPTIONS request successful. Nice you got here." },
        { status: 200 }
    );
 * GET
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
 * POST
    const body = await req.json();
 * PUT
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();
 * DELETE
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
 * PATCH
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();
 * PATCH
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();
 * 
 */