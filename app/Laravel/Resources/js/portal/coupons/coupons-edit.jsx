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

export default function CouponsEdit({ data }) {
    const route = useRoute();

    const { page_title, coupon } = data;
    const { errors, flash} = usePage().props;
    const [values, setValues] = useState({
        discount: coupon.discount_type ?? '',
        coupon_value: coupon.value ??'',
        usage: coupon.usage_limit ??'',
        expires_at: coupon.expires_at_formatted ?? ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.post(route('portal.coupons.edit', coupon.id), values);
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
                    <Breadcrumb.Link href="#">Coupons</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Edit Coupon</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <div className="sm:w-full lg:w-[600px] mb-7">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Edit Coupon</Typography>
                    </Card.Header>
                    <Card.Body>
                        <Typography tag="p">Fill up the <span className="text-red-600">( * )</span> required fields before submitting the form.</Typography>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control>
                                <Form.Label name="discount">Discount <span className="text-red-600">*</span></Form.Label>
                                <Form.Select
                                    name="discount"
                                    options={Object.entries(data.discount_types).map(([value, label]) => ({
                                        value, label
                                    }))}
                                    value={values.discount}
                                    onChange={(e) => setValues({ ...values, discount: e.target.value })}
                                />
                                {errors.discount && <small className="text-red-500">{errors.discount}</small>}
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="coupon_value">Coupoun Value <span className="text-red-600">*</span></Form.Label>
                                <Form.Input
                                    name="coupon_value"
                                    type="number"
                                    placeholder="0.00"
                                    step="0.01"
                                    min="0"
                                    value={values.coupon_value}
                                    onChange={(e) => setValues({ ...values, coupon_value: e.target.value })}
                                />
                                {errors.coupon_value && <small className="text-red-500">{errors.coupon_value}</small>}
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="usage">Usage Limit <span className="text-red-600">*</span></Form.Label>
                                <Form.Input
                                    name="usage"
                                    type="number"
                                    placeholder="0"
                                    step="1"
                                    min="0"
                                    value={values.usage}
                                    onChange={(e) => setValues({ ...values, usage: e.target.value })}
                                />
                                {errors.usage && <small className="text-red-500">{errors.usage}</small>}
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="expires_at">Expiration <span className="text-red-600">*</span></Form.Label>
                                <Form.Input
                                    name="expires_at"
                                    type="date"
                                    value={values.expires_at}
                                    onChange={(e) => setValues({ ...values, expires_at: e.target.value })}
                                />
                                {errors.expires_at && <small className="text-red-500">{errors.expires_at}</small>}
                            </Form.Control>
                            <div className="mt-7"><hr className="mb-3"/>
                                <Link size="small" variant="secondary" href={route('portal.coupons.index')}>
                                    <i className="fas fa-undo mr-2"></i> Return to List
                                </Link>
                                <Button size="small" variant="primary" type="submit">
                                    <i className="fas fa-paper-plane mr-2"></i>Save
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Main>
    )
}