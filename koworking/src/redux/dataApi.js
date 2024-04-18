import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "room/get-all-rooms",
    }),

    getPictures: builder.query({
      query: (id) => `room/get-names-picture-by-room-id/${14}`,
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
    }),

    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `room/delete-room/${id}`,
        method: "DELETE",
      }),
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
