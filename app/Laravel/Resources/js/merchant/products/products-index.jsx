import Main from "@merchant/_layouts/main";
import Breadcrumb from "@merchant/_components/breadcrumb";
import Card from "@merchant/_components/card";
import Button from "@merchant/_components/button";
import Form from "@merchant/_components/form";
import Table from "@merchant/_components/table";
import Dropdown from "@merchant/_components/dropdowns";
import Link from "@merchant/_components/link";
import Alert from "@merchant/_components/alert";
import Pagination from "@merchant/_components/pagination";
import Typography from "@merchant/_components/typography";
import Swal from "sweetalert2";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { usePage }from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { toTitleCase } from "@merchant/_helpers/string-formatter";
import { moneyFormat } from "@merchant/_helpers/number-formatter";

export default function ProductsIndex({ data }) {
    const route = useRoute();

    const { page_title, record } = data;
    const { flash } = usePage().props;
    const [filters, setFilters] = useState({
        keyword: data.keyword ?? "",
        category: data.selected_category ?? "",
        start_date: data.start_date ?? "",
        end_date: data.end_date ?? "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.get(route('merchant.products.index'), filters);
    }

    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this product.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route('merchant.products.delete', id));
            }
        });
    }

    return (
        <Main>
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Products</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <Card>
                <Card.Header>
                    <Typography tag="h6">Search Filter</Typography>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <Form.Control>
                                <Form.Label name="keyword">Search</Form.Label>
                                <Form.Input
                                    name="keyword"
                                    type="text"
                                    value={filters.keyword}
                                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                                    placeholder="e.g., Product, Code, Merchant"
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="category">Category</Form.Label>
                                <Form.Select
                                    name="category"
                                    options={[
                                        { value: "", label: "Select Category" },
                                        ...Object.entries(data.categories).map(([value, label]) => ({
                                            value, label
                                        }))
                                    ]}
                                    value={filters.status}
                                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="start_date">From</Form.Label>
                                <Form.Input
                                    name="start_date"
                                    type="date"
                                    value={filters.start_date}
                                    onChange={(e) => setFilters({ ...filters, start_date: e.target.value })}
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="end_date">To</Form.Label>
                                <Form.Input
                                    name="end_date"
                                    type="date"
                                    value={filters.end_date}
                                    onChange={(e) => setFilters({ ...filters, end_date: e.target.value })}
                                />
                            </Form.Control>
                        </div>
                        <div className="mt-2">
                            <Button type="submit" size="small" variant="primary">
                                <i className="fas fa-search mr-2"></i>Apply
                            </Button>
                            <Link size="small" variant="secondary" href={route('merchant.products.index')}>
                                <i className="fas fa-undo mr-2"></i> Reset
                            </Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Table>
                <Table.Title>
                    <div className="flex items-center justify-between w-full">
                        <Typography tag="h6">Products</Typography>
                        <div>
                            <Link size="small" variant="primary" href={route('merchant.products.create')}>
                                <i className="fas fa-cubes mr-2"></i> Create Product
                            </Link>
                        </div>
                    </div>
                </Table.Title>

                <Table.Wrapper>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell isHeader>Code</Table.Cell>
                            <Table.Cell isHeader>Name</Table.Cell>
                            <Table.Cell isHeader>Category</Table.Cell>
                            <Table.Cell isHeader><div className="text-right">Price</div></Table.Cell>
                            <Table.Cell isHeader><div className="text-center">Stock</div></Table.Cell>
                            <Table.Cell isHeader>Date Created</Table.Cell>
                            <Table.Cell isHeader>Action</Table.Cell>
                        </Table.Row>
                    </Table.Head>

                    <Table.Body>
                        {record.data && record.data.length > 0 ? (
                            record.data.map(product => (
                                <Table.Row key={product.id}>
                                    <Table.Cell>
                                        <Link href="#">
                                            <span className="text-indigo-600">{product.code}</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>{toTitleCase(product.name)}</Table.Cell>
                                    <Table.Cell>{toTitleCase(product.category?.name)}</Table.Cell>
                                    <Table.Cell>
                                        <div className="text-right">₱ {moneyFormat(product.price)}</div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="text-center">{product.stock}</div>
                                    </Table.Cell>
                                    <Table.Cell>{product.date_created}</Table.Cell>
                                    <Table.Cell>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link href={route('merchant.products.edit', product.id)}>Edit Details</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Button size="default" variant="default" onClick={() => handleDeleteProduct(product.id)}>Delete Product</Button>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={7} className="text-center">
                                    No Record Found.
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table.Wrapper>

                {record.data && record.data.length > 0 ? (
                        <div className="px-5 py-5">
                            <Pagination links={record.links} record={record} />
                        </div>
                    ) : null
                }
            </Table>
        </Main>
    );
}