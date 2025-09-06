import Main from "@web/_layouts/main";
import Typography from "@web/_components/typography"
import Form from "@web/_components/form";
import Button from "@web/_components/button";
import Link from "@web/_components/link";
import Card from "@web/_components/card";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";

export default function Index({ data }) {
    const route = useRoute();

    const { page_title } = data;

    return(
        <Main>
            <Head title={page_title} />
            <Typography tag="h3">Shop</Typography>
            <Typography tag="p">Check the status of recent orders, manage returns, and discover similar products.</Typography>
       
            <Form> 
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Form.Control>
                        <Form.Input
                            name="name"
                            type="text"
                            placeholder="Product"
                            value=""
                        />
                    </Form.Control>
                    <Form.Control>
                        <Form.Input
                            name="category"
                            type="text"
                            placeholder="Category"
                            value=""
                        />
                    </Form.Control>
                    <Form.Control>
                        <Form.Input
                            name="sort"
                            type="text"
                            placeholder="Sort"
                            value=""
                        />
                    </Form.Control>
                </div>
                <div className="mt-2">
                    <Button type="submit" size="small" variant="primary">
                        <i className="fas fa-search mr-2"></i>Search
                    </Button>
                    <Link size="small" variant="secondary" href={route('web.index')}>
                        <i className="fas fa-undo mr-2"></i> Reset
                    </Link>
                </div>
            </Form>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
                <div className="max-w-md mx-auto md:mx-0 rounded-md overflow-hidden shadow-md hover:shadow-lg mt-6">
                    <div className="relative">
                        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product"/>
                        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                            Unavailable
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                        <p className="text-gray-600 text-sm mb-4 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
                            ante vel eros fermentum faucibus sit amet euismod lorem.
                        </p>
                        <p className="font-bold text-lg">₱ 19.99</p>
                        <div className="mt-2">
                            <Button type="submit" size="small" variant="info">
                                <i className="fas fa-bolt mr-2"></i> Buy Now
                            </Button>
                            <Link size="small" variant="success" href="#">
                                <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}