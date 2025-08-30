import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Card from "@portal/_components/card";
import Link from "@portal/_components/link";
import Typography from "@portal/_components/typography";
import { moneyFormat } from "@portal/_helpers/number-formatter";
import { toTitleCase } from "@portal/_helpers/string-formatter";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";

export default function ProductsShow({ data }) {
    const route = useRoute();
    
    const { page_title, product } = data;

    return (
        <Main>
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Products</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Product Details</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            <div className="w-full mb-5">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Product Details - {product.code}</Typography>
                    </Card.Header>
                    <Card.Body>
                        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <img
                                alt="Product Image"
                                src={`${product.attachment[0].directory}/${product.attachment[0].filename}`}
                                className="row-span-2 aspect-[3/4] w-full rounded-lg object-cover"
                            />
                            <img
                                alt="Product Image"
                                src={`${product.attachment[1].directory}/${product.attachment[1].filename}`}
                                className="hidden md:block col-start-2 aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <img
                                alt="Product Image"
                                src={`${product.attachment[2].directory}/${product.attachment[2].filename}`}
                                className="hidden md:block col-start-2 row-start-2 aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <img
                                alt="Product Image"
                                src={`${product.attachment[3].directory}/${product.attachment[3].filename}`}
                                className="hidden md:block row-span-2 aspect-[4/5] w-full rounded-lg object-cover"
                            />
                        </div>
                        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{product.name}</h1>
                            </div>
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-2xl tracking-tight">{product.code}</p>
                                <p className="text-base tracking-tight mt-2">Mechant: {toTitleCase(product.merchant?.business_name)}</p>
                                <p className="text-base tracking-tight mt-2">Price: ₱ {moneyFormat(product.price)}</p>
                                <p className="text-base tracking-tight mt-2">Stocks: {product.stock}</p>
                                <p className="text-base tracking-tight mt-2">Category: {product.category?.name}</p>
                                <p className="text-base tracking-tight mt-2">Date Created: {product.date_created}</p>
                            </div>
                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                                <div>
                                    <h3 className="sr-only">Description</h3>
                                    <div className="space-y-6">
                                        <p className="text-base text-justify">{product.description}</p>
                                    </div>
                                </div>
                                <div className="mt-7"><hr className="mb-3"/>
                                    <Link size="small" variant="secondary" href={route('portal.products.index')}>
                                        <i className="fas fa-undo mr-2"></i> Return to List
                                    </Link>
                                    <Link size="small" variant="warning" href={route('portal.products.edit', product.id)}>
                                        <i className="fas fa-edit mr-2"></i> Edit Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Main>
    );
}