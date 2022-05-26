import MeetupList from "../components/meetups/MeetupList";

const JUST_DATA = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://images.unsplash.com/photo-1595867818082-083862f3d630?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVuaWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://images.unsplash.com/photo-1591383540906-cc6f63038cac?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJyaXN0b2wlMjB1a3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
						<MeetupList meetups={JUST_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
