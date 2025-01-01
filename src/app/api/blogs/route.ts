"use server";
import { db } from "@/components/config/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function GET() {
  const collectionRef = collection(db, "blogs");

  const data = await getDocs(collectionRef);

  const blogList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return NextResponse.json({ blogList });
}
