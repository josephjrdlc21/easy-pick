import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Alert from "@portal/_components/alert";
import Card from "@portal/_components/card";
import Typography from "@portal/_components/typography";
import Form from "@portal/_components/form";
import Button from "@portal/_components/button";
import Link from "@portal/_components/link";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import formData from "@portal/_utils/form-data";

export default function ProductsCreate({ data }) {
    const route = useRoute();

    const { page_title } = data;
    const { errors, flash} = usePage().props;
    const [values, setValues] = useState({
        merchant: '',
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        image: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.post(route('portal.products.create'), formData(values), {
            forceFormData: true,
        });
    }

    return(
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
                    <Breadcrumb.CurrentLink>Create Product</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <div className="sm:w-full lg:w-[700px] mb-7">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Create Product</Typography>
                    </Card.Header>
                    <Card.Body>
                        <Typography tag="p">Fill up the <span className="text-red-600">( * )</span> required fields before submitting the form.</Typography>
                        <Form onSubmit={handleSubmit}> 
                            <Form.Control>
                                <Form.Label name="merchant">Merchant <span className="text-red-600">*</span></Form.Label>
                                <Form.Select
                                    name="merchant"
                                    options={[
                                        { value: "", label: "Select Merchant" },
                                        ...Object.entries(data.merchants).map(([value, label]) => ({
                                            value, label
                                        }))
                                    ]}
                                    value={values.merchant}
                                    onChange={(e) => setValues({ ...values, merchant: e.target.value })}
                                />
                                {errors.merchant && <small className="text-red-500">{errors.merchant}</small>}
                            </Form.Control>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">      
                                <Form.Control>
                                    <Form.Label name="name">Product <span className="text-red-600">*</span></Form.Label>
                                    <Form.Input
                                        name="name"
                                        type="text"
                                        placeholder="product name"
                                        value={values.name}
                                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                                    />
                                    {errors.name && <small className="text-red-500">{errors.name}</small>}
                                </Form.Control>
                                <Form.Control>
                                    <Form.Label name="category">Category <span className="text-red-600">*</span></Form.Label>
                                    <Form.Select
                                        name="category"
                                        options={[
                                            { value: "", label: "Select Category" },
                                            ...Object.entries(data.categories).map(([value, label]) => ({
                                                value, label
                                            }))
                                        ]}
                                        value={values.category}
                                        onChange={(e) => setValues({ ...values, category: e.target.value })}
                                    />
                                    {errors.category && <small className="text-red-500">{errors.category}</small>}
                                </Form.Control>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">      
                                <Form.Control>
                                    <Form.Label name="price">Price <span className="text-red-600">*</span></Form.Label>
                                    <Form.Input
                                        name="price"
                                        type="number"
                                        placeholder="0.00"
                                        step="0.01"
                                        min="0"
                                        value={values.price}
                                        onChange={(e) => setValues({ ...values, price: e.target.value })}
                                    />
                                    {errors.price && <small className="text-red-500">{errors.price}</small>}
                                </Form.Control>
                                <Form.Control>
                                    <Form.Label name="stock">Stocks <span className="text-red-600">*</span></Form.Label>
                                    <Form.Input
                                        name="stock"
                                        type="number"
                                        placeholder="0"
                                        step="1"
                                        min="0"
                                        value={values.stock}
                                        onChange={(e) => setValues({ ...values, stock: e.target.value })}
                                    />
                                    {errors.stock && <small className="text-red-500">{errors.stock}</small>}
                                </Form.Control>
                            </div>
                            <Form.Control>
                                <Form.Label name="description">Description <span className="text-red-600">*</span></Form.Label>
                                <Form.TextArea
                                    name="description"
                                    value={values.description}
                                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                                />
                                {errors.description && <small className="text-red-500">{errors.description}</small>}
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="image">Product Image <span className="text-red-600">*</span></Form.Label>
                                <Form.File
                                    name="image"
                                    type="file"
                                    onChange={(e) => setValues({ ...values, image: Array.from(e.target.files) })}
                                    multiple
                                />
                                {errors.image && <small className="text-red-500">{errors.image}</small>}
                            </Form.Control>
                            <div className="mt-7"><hr className="mb-3"/>
                                <Link size="small" variant="secondary" href={route('portal.products.index')}>
                                    <i className="fas fa-undo mr-2"></i> Return to List
                                </Link>
                                <Button size="small" variant="primary" type="submit">
                                    <i className="fas fa-paper-plane mr-2"></i>Submit
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Main>
    )
}