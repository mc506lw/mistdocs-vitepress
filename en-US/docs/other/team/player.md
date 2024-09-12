```markdown
---
layout: page
---
<script setup>
import {
   VPTeamPage,
   VPTeamPageTitle,
   VPTeamMembers
} from 'vitepress/theme'

const adminMembers = [
   {
     avatar: 'https://www.example.com/lw.jpg',
     name: 'lw（老万）',
     title: 'Development, Official Website, Server Provisioning',
     links: [
       { icon: 'github', link: 'https://github.com/lw' },
       { icon: 'twitter', link: 'https://twitter.com/lw' }
     ]
   },
   {
     avatar: 'https://www.example.com/moshushi.jpg',
     name: 'moshushi（魔术师）',
     title: 'Plugin Maintenance, Customer Service, Website Maintenance',
     links: [
       { icon: 'github', link: 'https://github.com/moshushi' },
       { icon: 'twitter', link: 'https://twitter.com/moshushi' }
     ]
   }
]

const dafengguanMembers = [
   {
     avatar: 'https://www.example.com/ljh.jpg',
     name: 'LJH',
     title: 'Finance, Backups, Customer Service, Resource Acquisition',
     links: [
       { icon: 'github', link: 'https://github.com/ljh' },
       { icon: 'twitter', link: 'https://twitter.com/ljh' }
     ]
   },
   {
     avatar: 'https://www.example.com/ddbox.jpg',
     name: 'DDbox（Dong Dong Doesn’t Understand）',
     title: 'Event Planning, Website Maintenance',
     links: [
       { icon: 'github', link: 'https://github.com/ddbox' },
       { icon: 'twitter', link: 'https://twitter.com/ddbox' }
     ]
   },
]
</script>

<VPTeamPage>
   <VPTeamPageTitle>
     <template #title>
       Our Team
     </template>
     <template #lead>
       Our team consists of a group of passionate individuals who collectively drive the project forward.
     </template>
   </VPTeamPageTitle>
  
   <!-- Divider -->
   <h2 class="team-divider">Administrators</h2>

   <!-- Administrator Team -->
   <VPTeamMembers
     :members="adminMembers"
   />
  
   <!-- Divider -->
   <h2 class="team-divider">General Mahamatra</h2>
  
   <!-- General Mahamatra -->
   <VPTeamMembers
     :members="dafengguanMembers"
   />
</VPTeamPage>

<style>
.team-divider {
   text-align: center; /* Center the title */
   font-size: 24px; /* Title font size */
   font-weight: bold; /* Bold the title */
   margin-top: 30px; /* Spacing above the title */
   margin-bottom: 20px; /* Spacing below the title */
   color: #333; /* Title color */
}
</style>
```