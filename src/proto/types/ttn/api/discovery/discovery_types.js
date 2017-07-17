// Copyright © 2017 The Things Network
// Use of this source code is governed by the MIT license that can be found in the LICENCE file.

/* @flow */
/* eslint-disable */
// Code generated by protoc-gen-flowtypes DO NOT EDIT.
// InputID: 043c70d1f1010a154afbd77c02586d21252ba06c

export type Metadata = {
  dev_addr_prefix?: string,
  app_id?: string,
  app_eui?: string
};

export type Announcement = {
  id?: string,
  service_name?: string,
  service_version?: string,
  description?: string,
  url?: string,
  public?: boolean,
  net_address?: string,
  public_key?: string,
  certificate?: string,
  api_address?: string,
  mqtt_address?: string,
  amqp_address?: string,
  metadata?: Array<Metadata>
};

export type GetServiceRequest = {
  service_name?: string
};

export type GetRequest = {
  id?: string,
  service_name?: string
};

export type MetadataRequest = {
  id?: string,
  service_name?: string,
  metadata?: Metadata
};

export type AnnouncementsResponse = {
  services?: Array<Announcement>
};

export type GetByAppIDRequest = {
  app_id?: string
};

export type GetByAppEUIRequest = {
  app_eui?: string
};

