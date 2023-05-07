import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button, TextField } from '@mui/material';
import Image from "next/image"
import validate from 'validate.js';
import emailjs from 'emailjs-com';
import styles from '../styles/Home.module.css'

const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USERID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID as string
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID as string

const schema = {
  from_name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  } as any,
  reply_to: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  } as any,
  message: {
    presence: { allowEmpty: false, message: 'isrequired' },
    length: {
        maximum: 1000,
    }
  } as any
};


const ContactForm = () => {

  const sendEmail = (e: Event) => {
    e.preventDefault();
        console.log('user id', USER_ID);
        console.log('service id', SERVICE_ID);
        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target as any,
          USER_ID
        )
        .then((res) => console.log('SUCCESS!', res.status, res.text))
        .catch(error => console.log('FAILED...', error));

        setFormState(formState => ({
          ...formState,
          isValid: false,
          values: {},
          touched: {},
          errors: {}
        }));
  }

  const [formState, setFormState] = useState({
    isValid: false,
    values: {} as any,
    touched: {} as any,
    errors: {} as any,
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e: any) => {
    e.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  const hasError = (field: any) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div id='contact' style={{marginTop: 100}}>
    <form 
        //headers='application/json'
        name="contact-form"
        onSubmit={sendEmail as any}
      >
        <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {/* Place your form component here */}
        <Grid item>
              <Typography className={styles.bc1} variant="h4" align="center">
                <strong>Contact Form</strong>
              </Typography>
              <Typography className={styles.bc2} variant="h6" color="textSecondary" align="center">
                Contact Us
              </Typography>
            </Grid>
            <Grid item spacing={2} padding={2}>
              <TextField
                placeholder="Name"
                label="Name *"
                variant="outlined"
                size="medium"
                name="from_name"
                id="from_name"
                fullWidth
                helperText={
                  hasError('from_name') ? formState.errors.from_name[0] : null
                }
                error={hasError('from_name')}
                onChange={handleChange}
                type="text"
                value={formState.values.from_name || ''}
              />
            </Grid>
            <Grid item spacing={2} padding={2}>
              <TextField
                placeholder="E-mail"
                label="E-mail *"
                variant="outlined"
                size="medium"
                name="reply_to"
                fullWidth
                helperText={hasError('reply_to') ? formState.errors.reply_to[0] : null}
                error={hasError('reply_to')}
                onChange={handleChange}
                type="email"
                value={formState.values.reply_to || ''}
              />
            </Grid>
            <Grid item spacing={2} padding={2}>
              <TextField
                placeholder="Subject"
                label="Subject *"
                variant="outlined"
                size="medium"
                name="subject"
                fullWidth
                helperText={hasError('subject') ? formState.errors.subject[0] : null}
                error={hasError('subject')}
                onChange={handleChange}
                type="text"
                value={formState.values.subject || ''}
              />
            </Grid>
            <Grid item spacing={2} padding={2}>
              <TextField
                placeholder="Message"
                label="Message *"
                variant="outlined"
                size="medium"
                name="message"
                fullWidth
                helperText={hasError('message') ? formState.errors.message[0] : null}
                error={hasError('message')}
                onChange={handleChange}
                type="text"
                value={formState.values.message || ''}
                multiline={true}
                rows={7}
              />
            </Grid>
            <Grid item paddingBottom={2} sx={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center"
              }}>
              <Button
                size="large"
                variant="contained"
                type="submit"
                color="primary"
                disabled={!formState.isValid}
              >
                Send
              </Button>
            </Grid>
      </Grid>
      <Grid item xs={0} md={4}>
        {/* Place your image component here */}
        <br/>
        <br/>
        <br/>
        <Image src='/PAPurpleLogo.png' layout='responsive' height={250} width={250}></Image>
      </Grid>
    </Grid>
      </form>
    </div>
  );
};

export default ContactForm;