<template>
  <form id="contact" class="form" @submit.prevent="submitForm()">
    <div class="container">
      <h2 class="form__title">Entre em contato:</h2>
      <FormInput />
      <FormButton />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import PhoneValidation from '@/mixins/validations/PhoneValidation'
import validEmail from '@/mixins/validations/validEmail'
import validName from '@/mixins/validations/validName'
export default Vue.extend({
  name: 'FormComponent',
  mixins: [PhoneValidation, validEmail, validName],
  data() {
    return {
      form: {
        full_name: '' as string,
        email: '' as string,
        phone_number: '' as string,
        subject: '' as string,
        message: '' as string,
      },
      form_valid: {
        full_name: true as boolean,
        email: true as boolean,
        phone_number: true as boolean,
        subject: true as boolean,
        message: true as boolean,
      },
    }
  },
  methods: {
    submitForm(): void | unknown {
      try {
        this.validateAll(true, true, true, true, true)
        const { full_name, email, phone_number, subject, message } = this.form
        const name_valid = this.isNameValid(full_name)
        const email_valid = this.validateEmail(email)
        const phone_valid = this.isPhoneValid(phone_number)
        if (name_valid && email_valid && phone_valid && subject && message) {
          const link = `mailto:matheus.barbieri@hotmail.com
          ?subject=${subject}
          &body=Olá meu nome é ${full_name}, meu telefone é ${phone_number} e meu email é ${email}. 
          Assunto: ${message}`
          window.location.href = link
          this.clearForm()
        } else {
          this.validateAll(
            !!name_valid,
            !!email_valid,
            phone_valid,
            !!subject,
            !!message,
          )
        }
      } catch (error) {
        return error
      }
    },
    validateAll(
      name_valid: boolean,
      email_valid: boolean,
      phone_valid: boolean,
      subject: boolean,
      message: boolean,
    ): void {
      const { form_valid } = this
      form_valid.full_name = name_valid
      form_valid.email = email_valid
      form_valid.phone_number = phone_valid
      form_valid.subject = subject
      form_valid.message = message
    },
    clearForm(): void {
      this.form.full_name = ''
      this.form.email = ''
      this.form.phone_number = ''
      this.form.subject = ''
      this.form.message = ''
    },
  },
})
</script>

<style lang="scss" scoped>
.form {
  margin: 15px 0 35px 0;
  &__title {
    font-size: 29px;
    font-weight: bold;
    margin-bottom: 35px;
  }
}
</style>
