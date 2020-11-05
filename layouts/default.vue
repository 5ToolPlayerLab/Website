<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <header>
            <c-flex
              as="nav"
              :direction="['column', 'row']"
              align="center"
              justify="space-between"
              :mb="['80px', '130px']"
            >
              <c-box id="header-left-box"></c-box>
              <c-box id="header-center-box">
                <c-box id="nav-logo">
                  <img
                    src="~/assets/images/brand/5T Diamond.svg"
                    alt="5 Tool Player Lab logo"
                  />
                </c-box>
              </c-box>
              <c-stack id="header-right-box" align="center" spacing="0">
                <c-text
                  color="#f3e900"
                  font-size="md"
                  text-transform="uppercase"
                  letter-spacing="2px"
                  >For questions call</c-text
                >
                <c-link
                  href="tel:+1-217-816-3704"
                  letter-spacing="3px"
                  font-weight="400"
                  >(217)-816-3704</c-link
                >
              </c-stack>
            </c-flex>
            <c-box as="section" :px="['20px', '100px']">
              <c-text
                text-transform="uppercase"
                letter-spacing="2px"
                line-height="1"
                border-left="3px solid #f3e900"
                pl="2"
                >Now accepting bookings</c-text
              >
              <c-heading :font-size="['4rem', '6rem']" letter-spacing="3px"
                ><span style="color: #89d454">5</span> Tool Player Lab</c-heading
              >
              <c-text font-size="2xl" letter-spacing="2px" mb="2"
                >Looking to pay for a session?</c-text
              >
              <c-button
                v-chakra="{
                  ':hover': { bg: '#f3e900', color: 'black' },
                  ':active': { bg: '#f3e900', color: 'black' },
                  ':focus': { bg: '#f3e900', color: 'black', shadow: 'outline' },
                }"
                as="a"
                href="https://venmo.com/lab5t"
                bg="none"
                border="2px solid #f3e900"
                border-radius="0"
                letter-spacing="2px"
              >
                Pay Here
              </c-button>
            </c-box>
          </header>
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
export default {
  name: 'AppLayout',
};
</script>

<style lang="scss" scoped>
header {
  background: url('~assets/images/5T Header BG2.png') no-repeat center center
    fixed;
  background-size: cover;
  height: 800px;
  width: 100%;

  nav {
    min-height: 120px;
    width: 100%;
    position: relative;
    padding: 0 40px;

    #nav-logo {
      padding: 10px;
      background: radial-gradient(
        circle,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 0, 0, 1) 20%,
        rgba(255, 255, 255, 0) 00%
      );
      display: grid;
      place-items: center;

      @include window-xs {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        height: 80px;
        width: auto;
      }
    }
  }
}
</style>
