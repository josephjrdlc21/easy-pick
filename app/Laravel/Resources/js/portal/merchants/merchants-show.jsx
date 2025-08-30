import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Card from "@portal/_components/card";
import Button from "@portal/_components/button";
import Link from "@merchant/_components/link";
import Typography from "@portal/_components/typography";
import Badge from "@portal/_components/badge";
import Swal from "sweetalert2";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { router } from "@inertiajs/react";
import { statusBadge } from "@portal/_helpers/string-formatter";

export default function MerchantsShow({ data }) {
    const route = useRoute();
    
    const { page_title, merchant } = data;

    const handleRemarks = (id, status) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to mark this application as "${status}"? Please provide a remark for this action.`,
            icon: 'warning',
            input: 'textarea',
            inputPlaceholder: 'Enter your remarks here...',
            inputAttributes: {
                'aria-label': 'Type your remarks here'
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            preConfirm: (remarks) => {
                if (!remarks) {
                    Swal.showValidationMessage('Remarks are required');
                    return false;
                }
                return remarks;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route('portal.merchants.remarks', id), {
                    status: status,
                    remarks: result.value
                });
            }
        });
    };

    return (
        <Main>
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Merchants</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Merchant Details</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden">
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Merchant Details</Typography>
                    </Card.Header>
                    <Card.Body>
                        <div className="px-4">
                            <Typography tag="p" variant="primary">
                                <b>Details</b>
                            </Typography>
                        </div>
                        <div className="flex flex-row justify-between space-x-6">
                            <div className="p-4 rounded flex-1">
                                <Typography tag="p">
                                    <b>Business Name</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Business Line</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Business Scope</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Owner/Authorized Representative</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Address</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Contact number</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Telephone number</b>
                                </Typography>
                            </div>
                            <div className="p-4 rounded flex-1">
                                <Typography tag="p">
                                    {merchant.business_name}
                                </Typography>
                                <Typography tag="p">
                                    {merchant.business_line}
                                </Typography>
                                <Typography tag="p">
                                    {merchant.business_scope}
                                </Typography>
                                <Typography tag="p">
                                    {merchant.name}
                                </Typography>
                                <Typography tag="p">
                                    {merchant.address}
                                </Typography>
                                <Typography tag="p">
                                    {merchant.mobile_number}
                                </Typography>
                                <Typography tag="p">
                                    {merchant.telephone_number}
                                </Typography>
                            </div>
                        </div>

                        <div className="px-4">
                            <Typography tag="p" variant="primary">
                                <b>Status</b>
                            </Typography>
                        </div>
                        <div className="flex flex-row justify-between space-x-6">
                            <div className="p-4 rounded flex-1">
                                <Typography tag="p">
                                    <b>Registration Date</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Application Status</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Approver</b>
                                </Typography>
                                <Typography tag="p">
                                    <b>Approved At</b>
                                </Typography>
                            </div>
                            <div className="p-4 rounded flex-1">
                                <Typography tag="p">
                                    {merchant.date_created}
                                </Typography>
                                <Typography tag="p">
                                    <Badge variant={statusBadge(merchant.status)}>
                                        {merchant.status}
                                    </Badge>
                                </Typography>
                                <Typography tag="p">
                                    {merchant.approver?.name ?? 'N/A'}
                                </Typography>
                                <Typography tag="p">
                                    {merchant.date_approved ?? 'N/A'}
                                </Typography>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <Typography tag="h6">Documents</Typography>
                    </Card.Header>
                    <Card.Body>
                        <div className="px-4">
                            <Typography tag="p" variant="primary">
                                <b>Attachments</b>
                            </Typography>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:space-x-6">
                            <div className="p-4 rounded flex-1">
                                {merchant.attachment.map(file => (
                                    <Typography tag="p" key={file.id}>
                                        <b>{file.document_type}</b>
                                    </Typography>
                                ))}
                            </div>
                            <div className="p-4 rounded flex-1">
                                {merchant.attachment.map(file => (
                                    <Typography tag="p" key={file.id}>
                                        <a href={`${file.directory}/${file.filename}`} target="_blank">
                                            <span className="text-indigo-600">{file.filename}</span>
                                        </a>
                                    </Typography>
                                ))}
                            </div>
                        </div>
                        <div className="px-4">
                            <Typography tag="p" variant="primary">
                                <b>Remarks</b><br/>
                            </Typography>
                            <Typography tag="p">
                                {merchant.remarks ?? 'N/A'}
                            </Typography>
                        </div>
                        <div className="mt-3">
                            <hr className="mb-3"/>
                            <Link size="small" variant="secondary" href={route('portal.merchants.index')}>
                                <i className="fas fa-undo mr-2"></i> Return to List
                            </Link>
                            {merchant.status === "pending" && (
                                <>
                                    <Button size="small" variant="success" onClick={() => handleRemarks(merchant.id, "approved")}>
                                        <i className="fas fa-circle-check mr-2"></i>Approve Application
                                    </Button>
                                    <Button size="small" variant="danger" onClick={() => handleRemarks(merchant.id, "rejected")}>
                                        <i className="fas fa-ban mr-2"></i>Reject Application
                                    </Button>
                                </>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Main>
    );
}