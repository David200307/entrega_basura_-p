// src/app/app.config.server.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const config: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
