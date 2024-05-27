import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
function saveTokenInCookie(token) {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // Устанавливаем срок действия куки на 7 дней
  document.cookie = `jwt_token=${token};expires=${expires.toUTCString()};path=/`;
}

// Функция для получения JWT токена из куки
function getTokenFromCookie() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("jwt_token=")) {
      return cookie.substring("jwt_token=".length, cookie.length);
    }
  }
  return null;
}
export const dataApi = createApi({
  reducerPath: "dataApi/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Rooms", "Pictures"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "room/get-all-rooms",
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Rooms", id })), "Rooms"]
          : ["Rooms"],
    }),
    getPicturesName: builder.query({
      query: (name) => ({
        url: `room/get-names-picture-by-name/${name}`,
      }),
    }),

    addRooms: builder.mutation({
      query: (body) => ({
        url: "room/add-room",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          address: body.address,
          name: body.name,
          description: body.description,
          price: body.price,
          places: body.places,
          weekDays: body.weeks,
          timeStart: body.timeStart,
          timeEnd: body.timeEnd,
        },
      }),
      invalidatesTags: ["Rooms"],
    }),

    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `room/delete-room/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rooms"],
    }),
    deletePicture: builder.mutation({
      query: (name) => ({
        url: `room/delete-picture/${name}`,
        method: "DELETE",
      }),
    }),
    postOrders: builder.mutation({
      query: (body) => ({
        url: "order/create-order",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          roomId: body.roomId,
          timeStart: body.timeStart,
          durationHours: body.durationHours,
          durationMinuts: body.durationMinuts,
          summaryEvent: body.summaryEvent,
          fio: body.fio,
          email: body.email,
          phoneNumber: body.phoneNumber,
        },
      }),
    }),
    getOrders: builder.query({
      query: () => "order/get-all-orders",
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data.token;
          if (token) {
            saveTokenInCookie(token);
          }
        } catch (error) {
          console.error("Ошибка авторизации:", error);
        }
      },
    }),
  }),
});

export const {
  useAddRoomsMutation,
  useGetRoomsQuery,
  useDeleteRoomMutation,
  useGetPicturesQuery,
  useGetPicturesNameQuery,
  useDeletePictureMutation,
  usePostOrdersMutation,
  useGetOrdersQuery,
} = dataApi;
