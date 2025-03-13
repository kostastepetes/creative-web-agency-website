<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <h3 class="font-bold text-xl" style="color: #EBED9E;">Creative</h3>
          </div>
          <p class="text-gray-400">
            Crafting digital experiences that inspire and innovate.
          </p>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Services</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Web Design</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Development</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Branding</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Digital Marketing</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/about" class="hover:text-blue-400 transition-colors">About Us</router-link>
            </li>
            <li>
              <router-link to="/portfolio" class="hover:text-blue-400 transition-colors">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/about#careers" class="hover:text-blue-400 transition-colors">Careers</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-blue-400 transition-colors">Contact</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Connect</h3>
          <div class="flex gap-4">
            <i class="pi pi-facebook text-xl cursor-pointer hover:text-blue-400"></i>
            <i class="pi pi-twitter text-xl cursor-pointer hover:text-blue-400"></i>
            <i class="pi pi-instagram text-xl cursor-pointer hover:text-blue-400"></i>
            <i class="pi pi-linkedin text-xl cursor-pointer hover:text-blue-400"></i>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Creative Agency. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
