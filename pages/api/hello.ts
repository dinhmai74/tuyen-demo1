// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../data";

export interface Product {
  productName: string;
  image: string;
  id: string;
  price: number;
  qty: number;
  sku: number;
}

export interface RootObject {
  id: string;
  orderNumber: number;
  customer: string;
  sla: string;
  status: string;
  processingBy: string;
  products: Product[];
}

type Data = {
  data: RootObject[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: getData(10),
  });
}
