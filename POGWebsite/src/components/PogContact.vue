<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <body>
    <div class="content-wrapper">
      <div class="textbox">
        <div class="textbox-background">
          <div class="text">
            <h1>Schedule a consultation today!</h1>
            <p>
              Schedule a free consultation using the calendar below!<br />Message me at 1(619)
              259-0649 or email me at:<br />
              <a href="mailto:pog@pogwebdesign.com">pog@pogwebdesign.com</a> if no timeslots that
              meet your needs.
            </p>
            <div class="banner"></div>
            <div class="calendar-wrapper">
              <div class="calendar">
                <!-- Google Calendar Appointment Scheduling begin -->
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ31Bf5LmV_8ZzLHRoxavxm1emv7q8_9-pqCjKlFkMVv4VKOkNTV7jEToJmPnz3U3z1h_ZeP-FIC?gv=true"
                  style="border: 0"
                  width="100%"
                  height="600"
                  frameborder="0"
                ></iframe>
                <!-- end Google Calendar Appointment Scheduling -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.textbox-background {
  margin-top: 10vh;
  height: 100%;
  min-height: 84vh;
  background-size: contain;
  background-image: url(../assets/Images/HeaderBackground.jpg);
}
.calendar-wrapper {
  text-align: center;
  position: relative;
  padding: 3vh 0 0 0;
  width: 100%;
}

.calendar-wrapper .calendar iframe {
  width: 100%;
  height: 600;
  background: linear-gradient(
    135deg,
    #7ed957aa 0%,
    #0097b2aa 25%,
    #7ed957aa 50%,
    #0097b2aa 75%,
    #7ed957aa 100%
  );
}
</style>
