import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("isLogged", () => {
  const router = useRouter();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const store = reactive({
    phone: "+998",
    otp: [],
    loginModal: false,
    otpModal: false,
    isVerified: true,
    isLoading: false,
  });

  function handleSubmit() {
    store.loginModal = true;
    store.isLoading = true;
    console.log(store.phone);
    axios
      .post(
        baseUrl + "/client/sendSMS",
        {
          phone: store.phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (
          res.data.message == "Telefon raqamingizga tasdiqlash kodi yuborildi"
        ) {
          store.loginModal = false;
          store.otpModal = true;
          store.isVerified = true;
        } else {
          store.isVerified = false;
        }
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        store.loginModal = false;
        store.isLoading = false;
      });
  }

  function verifyOtp() {
    store.isLoading = true;
    console.log(store.phone);
    console.log(store.otp);
    axios
      .post(
        baseUrl + "/client/signup",
        {
          phone: store.phone,
          code: store.otp.join(""),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Tizimga kirildi") {
          store.otpModal = false;
          store.isVerified = true;
          store.isLoading = false;
          console.log("object");
          localStorage.setItem("user_id", res.data.client.id);
          localStorage.setItem("phone", res.data.client.phone);
          return;
        }
        store.isVerified = false;
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        store.loginModal = true;
        store.otpModal = false;
      });
  }

  return { store, handleSubmit, verifyOtp };
});
