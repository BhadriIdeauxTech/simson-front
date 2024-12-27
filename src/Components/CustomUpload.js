import React, { Fragment, useEffect, useState } from 'react'
import { Upload as AntdUpload, Form, Modal } from 'antd'
import styled from 'styled-components'
import Label from './Label'
import { TbUpload } from "react-icons/tb";

const { Item } = Form

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
  }

  border-radius: 10px;
  margin-bottom: 5px !important;

  & .ant-form-item-label {
    display:block;
    width:100%;
    text-align:start;
  }

  & .ant-form-item-label > label > span {
    font-weight: 600 !important;
    position: relative;
    font-size: 14px;
    letter-spacing: 0.01em;
  }
`
const AntdUploadStyle = styled(AntdUpload)`

`

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export const CustomUpload = ({
    width,
    marginRight,
    minWidth,
    display,
    rules,
    name,
    label,
    required,
    labelStyle,
    optional,
    listType,
    maxCount,
    accept,
    action,
    onChange,
    form,
    initialValue,
    ...rest
}) => {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState(null);

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const beforeUpload = (file) => {
        console.log({ file });
        return false;
    };

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    useEffect(() => {
        if (initialValue) {
            form.setFieldsValue({ [name]: initialValue }); // Set the initial value of the field
        }
    }, [form, initialValue, name]);

    return (
        <Fragment>
            <StyledItem
                style={{
                    width: width,
                    marginRight: marginRight,
                    minWidth: minWidth,
                    display: display,
                }}
                rules={rules}
                name={name}
                colon={false}
                required={false}
                valuePropName="fileList"
                getValueFromEvent={normFile}
                label={
                    label && (
                        <Fragment>
                            <Label required={required} labelStyle={labelStyle}>
                                {label} <span>{optional}</span>
                            </Label>
                        </Fragment>
                    )
                }
            >
                <AntdUploadStyle
                    {...rest}
                    listType={listType}
                    maxCount={maxCount}
                    accept={accept}
                    action={action}
                    onChange={onChange}
                    onPreview={handlePreview}
                    beforeUpload={beforeUpload}
                >
                    <div>
                        <TbUpload size={26} />
                        <div
                            style={{
                                marginTop: 8,
                            }}
                        >
                            Upload
                        </div>
                    </div>
                </AntdUploadStyle>
            </StyledItem>

            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </Fragment>
    )
}

