import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { SidebarStyled } from './SidebarStyled';
import { SidebarFormInterface } from './SidebarInterface';
import { useTypeSelector } from '../../redux/useTypeSelector';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import FormikField from '../Basic/Form/FormikField';
import { UPDATE_USER } from '../../GraphQL/Mutations';
import Button from '../Basic/Button';
import FieldUpdate from '../Basic/Form/FieldUpdate';

const Sidebar:React.FC = () => {
  const [updateUser] = useMutation(UPDATE_USER);
  const { user } = useTypeSelector((state) => state.authReducer);
  const [initialValues, setInitialValues] = useState<SidebarFormInterface>({
    name: '',
    phone: '',
    email: '',
    tower: '',
    floor: '',
    office: '',
    apartment: '',
  });
  useEffect(() => {
    const { id, ...filteredUser } = user;
    setInitialValues((prev) => ({ ...initialValues, ...filteredUser }));
  }, [user]);

  return (
    <SidebarStyled>
      <FormWrapper title="Personal data">
        {/* Todo Name and phone */}
        <FormRow className="one-element">
          <FieldUpdate name="name" placeholder="Name" label="Name" defaultValue={initialValues.name} />
          <FieldUpdate name="phone" placeholder="Phone" label="Phone" defaultValue={initialValues.phone} />
        </FormRow>
      </FormWrapper>

      {/* <FormWrapper title="Delivery data">
        <FormRow className="one-element">
          <FormikField
            name="tower"
            label="Delivery tower"
            defaultValue={initialValues.tower}
          />
        </FormRow>
        <FormRow>
          <FormikField
            name="floor"
            label="Your floor"
            defaultValue={initialValues.floor}
          />
          <FormikField
            name="office"
            label="Your office"
            defaultValue={initialValues.office}
          />
        </FormRow>
        <FormRow className="one-element">
          <FormikField
            name="apartment"
            label="Your apartment"
            defaultValue={initialValues.apartment}
          />
        </FormRow>
      </FormWrapper> */}
    </SidebarStyled>
  );
};

export default Sidebar;
