import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import CheckoutGeneral from '../CheckoutGeneral';
import { CheckoutFormInitialValues, CheckoutFormValidation } from './CheckoutFormConstants';
import { CheckoutFormInterface, CheckoutFormProps } from './CheckoutFormInterface';
import { CheckoutFormStyled } from './CheckoutFormStyled';
import { CREATE_ORDER } from '../../../../../GraphQL/Order/OrderMutations';
import FormWrapper from '../../../../Basic/Form/FormWrapper';
import FormRow from '../../../../Basic/Form/FormRow';
import FormikField from '../../../../Basic/Form/FormikField';
import Suggest from '../../../../Basic/Suggest';
import Button from '../../../../Basic/Button';
import FormDate from '../../../../Basic/Form/FormDate';

const CheckoutForm:React.FC<CheckoutFormProps> = (
  { restaurantID, user, cart, total, address }: CheckoutFormProps,
) => {
  const [createOrder] = useMutation(CREATE_ORDER);

  const [initialValues, setInitialValues] = useState<
    CheckoutFormInterface>(CheckoutFormInitialValues);
  const onSubmitHandler = (values: CheckoutFormInterface) => {
    const editedCart = cart.map((item:any) => ({
      product: item.id,
      productName: item.name,
      quantity: item.quantity,
    }));
    const { name, phone, email, floor, office, date, apartment, additionalComment } = values;
    createOrder({ variables: {
      data: {
        user: user.id,
        restaurant: restaurantID,
        date,
        total,
        orderCart: editedCart,
        orderCustomer: {
          name,
          phone,
          email,
          address,
          floor,
          office,
          apartment,
          additionalComment,
        },
      },
    } })
      .then(({ data }) => {
        const { createOrder: orderResult } = data;
        const { orderPayment } = orderResult;
        const { confirmation_url } = orderPayment;
        window.location.replace(confirmation_url);
      });
  };

  useEffect(() => {
    if (user.id) {
      Object.keys(initialValues).forEach((element:string) => {
        if (user[element]) {
          setInitialValues((prev: CheckoutFormInterface) => ({
            ...prev,
            [element]: user[element],
          }));
        }
      });
    }
  }, [user]);
  const formik = useFormik({
    initialValues,
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: CheckoutFormValidation,
    onSubmit: (values) => onSubmitHandler(values),
  });

  return (
    <CheckoutFormStyled>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper title="Your Contacts">
          <FormRow>
            <FormikField
              type="text"
              name="name"
              label="Your name"
              value={formik.values.name}
              error={formik.errors.name}
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="phone"
              label="Your phone"
              value={formik.values.phone}
              error={formik.errors.phone}
              disabled
              onChange={formik.handleChange}
            />
          </FormRow>
          <FormRow className="one-element">
            <FormikField
              type="text"
              name="email"
              label="Your email"
              value={formik.values.email}
              error={formik.errors.email}
              onChange={formik.handleChange}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery address">
          <FormRow className="one-element">
            <Suggest mode="form-element" />
          </FormRow>
          <FormRow className="three-elements">
            <FormikField
              type="text"
              name="floor"
              label="Your floor"
              value={formik.values.floor}
              error={formik.errors.floor}
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="office"
              label="Your office"
              value={formik.values.office}
              error={formik.errors.office}
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="apartment"
              label="Your apartment"
              value={formik.values.apartment}
              error={formik.errors.apartment}
              onChange={formik.handleChange}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Delivery detailes">
          <FormRow>
            <FormDate
              selectedDate={formik.values.date}
              onChange={(date) => formik.setFieldValue('date', date)}
            />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Additional comment">
          <FormRow className="one-element">
            <FormikField
              type="text"
              name="additionalComment"
              label="Your comment"
              value={formik.values.additionalComment}
              error={formik.errors.additionalComment}
              onChange={formik.handleChange}
              isTextarea
            />
          </FormRow>
        </FormWrapper>
        <CheckoutGeneral />
        <Button name="Checkout" disabled={!formik.isValid} className="full" />
      </form>
    </CheckoutFormStyled>
  );
};

export default CheckoutForm;
