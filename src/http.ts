import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

mock.onGet('/api/tickets').reply(200, [
    {
      "ticketId": 1,
      "number": "PU-OV-1",
      "lastUpdatedTime": "2019-08-04T21:32:03.527Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-29T15:30:02.293Z",
      "status": "assigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 1,
        "name": "Sign",
        "geoCode": "137",
        "kmFrom": 7,
        "kmTo": 20
      }
    },
    {
      "ticketId": 2,
      "number": "PU-OV-2",
      "lastUpdatedTime": "2019-08-05T02:01:20.001Z",
      "owner": {
        "userId": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "static/clarkKent.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-25T23:18:28.712Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 2,
        "name": "Switch",
        "geoCode": "137",
        "kmFrom": 1.3,
        "kmTo": 17.5
      }
    },
    {
      "ticketId": 3,
      "number": "PU-OV-3",
      "lastUpdatedTime": "2019-08-08T07:07:10.130Z",
      "owner": {
        "userId": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "static/clarkKent.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-24T12:34:56.163Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 3,
        "name": "Switch",
        "geoCode": "137",
        "kmFrom": 4.9,
        "kmTo": 22.7
      }
    },
    {
      "ticketId": 4,
      "number": "PU-OV-4",
      "lastUpdatedTime": "2019-08-01T11:04:23.177Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-26T13:15:24.961Z",
      "status": "assigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 4,
        "name": "Sign",
        "geoCode": "138",
        "kmFrom": 1.2,
        "kmTo": 21.7
      }
    },
    {
      "ticketId": 5,
      "number": "PU-OV-5",
      "lastUpdatedTime": "2019-08-02T05:32:36.930Z",
      "owner": {
        "userId": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "static/clarkKent.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-25T21:55:40.561Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 5,
        "name": "Switch warming",
        "geoCode": "137",
        "kmFrom": 2.9,
        "kmTo": 19.1
      }
    },
    {
      "ticketId": 6,
      "number": "PU-OV-6",
      "lastUpdatedTime": "2019-08-06T06:08:49.544Z",
      "owner": {
        "userId": 1,
        "firstName": "Peter",
        "lastName": "Parker",
        "avatar": "static/peterParker.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-26T10:53:42.094Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 6,
        "name": "Sign",
        "geoCode": "136",
        "kmFrom": 10.2,
        "kmTo": 13.5
      }
    },
    {
      "ticketId": 7,
      "number": "PU-OV-7",
      "lastUpdatedTime": "2019-08-06T22:27:45.229Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-26T03:06:28.329Z",
      "status": "assigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 7,
        "name": "Sign",
        "geoCode": "138",
        "kmFrom": 1.2,
        "kmTo": 15.5
      }
    },
    {
      "ticketId": 8,
      "number": "PU-OV-8",
      "lastUpdatedTime": "2019-08-06T05:44:12.734Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-26T15:01:54.504Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 8,
        "name": "Sign",
        "geoCode": "138",
        "kmFrom": 5.9,
        "kmTo": 20.9
      }
    },
    {
      "ticketId": 9,
      "number": "PU-OV-9",
      "lastUpdatedTime": "2019-08-05T21:00:36.275Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-29T17:24:50.875Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 9,
        "name": "Bridge",
        "geoCode": "137",
        "kmFrom": 1.9,
        "kmTo": 13.3
      }
    },
    {
      "ticketId": 10,
      "number": "PU-OV-10",
      "lastUpdatedTime": "2019-08-04T10:28:06.691Z",
      "owner": {
        "userId": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "static/clarkKent.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-24T21:09:53.964Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 10,
        "name": "Bridge",
        "geoCode": "138",
        "kmFrom": 2.8,
        "kmTo": 23.6
      }
    },
    {
      "ticketId": 11,
      "number": "PU-OV-11",
      "lastUpdatedTime": "2019-08-04T15:39:12.248Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-26T04:58:14.025Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 11,
        "name": "Bridge",
        "geoCode": "136",
        "kmFrom": 10.5,
        "kmTo": 22
      }
    },
    {
      "ticketId": 12,
      "number": "PU-OV-12",
      "lastUpdatedTime": "2019-08-07T17:19:48.162Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-28T10:40:20.743Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 12,
        "name": "Bridge",
        "geoCode": "138",
        "kmFrom": 0.4,
        "kmTo": 14.8
      }
    },
    {
      "ticketId": 13,
      "number": "PU-OV-13",
      "lastUpdatedTime": "2019-08-05T04:43:03.576Z",
      "owner": {
        "userId": 1,
        "firstName": "Peter",
        "lastName": "Parker",
        "avatar": "static/peterParker.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-26T10:57:29.276Z",
      "status": "assigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 13,
        "name": "Bridge",
        "geoCode": "138",
        "kmFrom": 1.7,
        "kmTo": 17.2
      }
    },
    {
      "ticketId": 14,
      "number": "PU-OV-14",
      "lastUpdatedTime": "2019-08-03T19:12:01.492Z",
      "owner": {
        "userId": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "static/clarkKent.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-28T09:24:56.630Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 14,
        "name": "Sign",
        "geoCode": "136",
        "kmFrom": 10,
        "kmTo": 22.1
      }
    },
    {
      "ticketId": 15,
      "number": "PU-OV-15",
      "lastUpdatedTime": "2019-08-06T02:30:44.855Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-25T01:25:15.810Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 15,
        "name": "Bridge",
        "geoCode": "136",
        "kmFrom": 10.6,
        "kmTo": 23.6
      }
    },
    {
      "ticketId": 16,
      "number": "PU-OV-16",
      "lastUpdatedTime": "2019-08-08T05:33:55.377Z",
      "owner": {
        "userId": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "static/clarkKent.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-28T23:31:42.624Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 16,
        "name": "Bridge",
        "geoCode": "138",
        "kmFrom": 6.1,
        "kmTo": 15.6
      }
    },
    {
      "ticketId": 17,
      "number": "PU-OV-17",
      "lastUpdatedTime": "2019-08-03T02:37:32.520Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-26T02:40:42.116Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 17,
        "name": "Bridge",
        "geoCode": "138",
        "kmFrom": 9.2,
        "kmTo": 13
      }
    },
    {
      "ticketId": 18,
      "number": "PU-OV-18",
      "lastUpdatedTime": "2019-08-01T11:15:27.567Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-28T22:22:07.711Z",
      "status": "assigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 18,
        "name": "Sign",
        "geoCode": "138",
        "kmFrom": 5.7,
        "kmTo": 19.4
      }
    },
    {
      "ticketId": 19,
      "number": "PU-OV-19",
      "lastUpdatedTime": "2019-08-03T17:05:24.440Z",
      "owner": {
        "userId": 1,
        "firstName": "Peter",
        "lastName": "Parker",
        "avatar": "static/peterParker.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-29T17:32:15.547Z",
      "status": "unassigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 19,
        "name": "Bridge",
        "geoCode": "136",
        "kmFrom": 10.4,
        "kmTo": 18
      }
    },
    {
      "ticketId": 20,
      "number": "PU-OV-20",
      "lastUpdatedTime": "2019-08-04T23:47:47.029Z",
      "owner": {
        "userId": 1,
        "firstName": "Peter",
        "lastName": "Parker",
        "avatar": "static/peterParker.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-28T07:40:52.357Z",
      "status": "assigned",
      "description": "Ticket description",
      "asset": {
        "assetId": 20,
        "name": "Switch",
        "geoCode": "136",
        "kmFrom": 9.5,
        "kmTo": 14.6
      }
    },
    {
      "ticketId": 21,
      "number": "PU-OV-21",
      "lastUpdatedTime": "2019-08-02T18:10:20.806Z",
      "owner": {
        "userId": 1,
        "firstName": "Peter",
        "lastName": "Parker",
        "avatar": "static/peterParker.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-29T00:20:46.609Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 21,
        "name": "Bridge",
        "geoCode": "136",
        "kmFrom": 6.5,
        "kmTo": 22.6
      }
    },
    {
      "ticketId": 22,
      "number": "PU-OV-22",
      "lastUpdatedTime": "2019-08-06T09:54:17.821Z",
      "owner": {
        "userId": 2,
        "firstName": "Bruce",
        "lastName": "Wayne",
        "avatar": "static/bruceWayne.png",
        "specialities": [
          "Woodworking"
        ]
      },
      "reportedTime": "2019-07-25T12:53:08.113Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 22,
        "name": "Sign",
        "geoCode": "137",
        "kmFrom": 9.7,
        "kmTo": 18
      }
    },
    {
      "ticketId": 23,
      "number": "PU-OV-23",
      "lastUpdatedTime": "2019-08-07T11:12:02.600Z",
      "owner": {
        "userId": 3,
        "firstName": "Clark",
        "lastName": "Kent",
        "avatar": "static/clarkKent.png",
        "specialities": [
          "Electrician"
        ]
      },
      "reportedTime": "2019-07-26T19:25:58.040Z",
      "status": "completed",
      "description": "Ticket description",
      "asset": {
        "assetId": 23,
        "name": "Bridge",
        "geoCode": "136",
        "kmFrom": 7.9,
        "kmTo": 21.7
      }
    }
  ]);

mock.onGet('/api/title').reply(200, 'Willow App');

export const http = {
    get(url: string) {
        return axios.get(url)
    }
}
