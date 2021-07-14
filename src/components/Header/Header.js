import {
  faUser,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "header",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    userIcon() {
      return faUser;
    },
    cartIcon() {
      return faShoppingCart;
    },
    menuIcon() {
      return faBars;
    },
  },
  mounted() {},
  methods: {},
};
