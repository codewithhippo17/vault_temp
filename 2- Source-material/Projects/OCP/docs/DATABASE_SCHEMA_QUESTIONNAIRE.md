# **🏗️ COMPREHENSIVE DATABASE SCHEMA QUESTIONNAIRE**
## **OCP LLM-Powered Dashboard with ML Integration**

*Please answer each section thoroughly. Your responses will directly inform the database architecture, indexing strategy, and performance optimization decisions.*

---

## **SECTION A: USER MANAGEMENT & AUTHENTICATION** 👥

**A1. User Architecture:**
- [ ] Single-tenant (each user isolated)
- [ ] Multi-tenant with organizations/teams
- [x] Hybrid (personal + shared team spaces) ✅ 2025-12-03

**A2. User Profile Requirements:**
Beyond basic Supabase auth, what user data do you need to store?
- [x] Display name, avatar, timezone ✅ 2025-12-03
- [x] User preferences (theme, language, notification settings) ✅ 2025-12-03
- [ ] Subscription/billing information
- [ ] Energy usage patterns or profile data
- [ ] Custom fields: workspace settings, preferred chart types

**A3. User Roles & Permissions:**
- [ ] Simple owner/viewer roles
- [x] Admin/Editor/Viewer hierarchy ✅ 2025-12-03
- [ ] Custom role definitions with granular permissions
- [ ] Department/team-based access controls

**A4. User Limits:**
- Max charts per dashboard: 10
- Max chat sessions per user: unlimited ________________
- Storage limit per user: unkown________________

---

## **SECTION B: DASHBOARD & VISUALIZATION ARCHITECTURE** 📊

**B1. Dashboard Structure:**
- [ ] Fixed number of tabs per dashboard
- [x] Unlimited tabs with pagination ✅ 2025-12-03
- [ ] Nested folder structure for organization
- [ ] Tag-based organization system

**B2. Dashboard Sharing:**
- [x] Public links with view-only access ✅ 2025-12-03
- [ ] Specific user invitations with permissions
- [ ] Organization-wide sharing
- [ ] Embed codes for external websites
- [ ] Time-limited access links

**B3. Dashboard Versioning:**
- [ ] No versioning needed
- [ ] Simple save/restore points
- [x] Full version history with diffs ✅ 2025-12-03
- [ ] Branch/merge functionality for collaborative editing

**B4. Chart Types Support:** *(Check all that apply)*
- [x] Line charts (time series) ✅ 2025-12-03
- [x] Bar/column charts ✅ 2025-12-03
- [x] Pie/donut charts ✅ 2025-12-03
- [x] Heatmaps ✅ 2025-12-03
- [x] Scatter plots ✅ 2025-12-03
- [x] Energy consumption visualizations ✅ 2025-12-03
- [x] Custom chart types ✅ 2025-12-03
- [x] Interactive/drill-down charts ✅ 2025-12-03

**B5. Chart Configuration Storage:**
How complex are your chart configurations?
- [ ] Simple (chart type + basic styling)
- [ ] Medium (filters, time windows, color schemes)
- [x] Complex (custom calculations, multiple data sources, advanced styling) ✅ 2025-12-03
- [ ] Describe specific requirements: ________________________________

---

## **SECTION C: DATA STORAGE & MANAGEMENT** 💾

**C1. Chart Data Source:**
- [ ] All chart data stored in PostgreSQL
- [ ] Real-time API calls to external services
- [ ] Hybrid (cache frequently used data, API for fresh data)
- [ ] File uploads (CSV, JSON) stored and processed

**C2. Data Volume Expectations:**
- Expected users in first year: ________________
- Average data points per chart: ________________
- Data retention period: ________________
- Peak concurrent users: ________________

**C3. Time-Series Data Requirements:**
- [ ] No time-series data
- [ ] Simple timestamp tracking
- [ ] High-frequency energy readings (minute/hour intervals)
- [ ] Multiple time granularities (minute, hour, day, month)
- [ ] Data aggregation and rollup strategies needed

**C4. External Data Integration:**
- [ ] No external data
- [ ] Energy APIs (specify): ________________________________
- [ ] Weather data integration
- [ ] IoT device data streams
- [ ] Other APIs: ________________________________

---

## **SECTION D: LLM CHAT SYSTEM** 🤖

The chat system lets users create **unlimited sessions**. On **every prompt**, they can choose **which agent to use, which LLM model to run, and where to place the output**—a **dashboard tab, the workspace, or a global context**. Messages can include **charts, files**, and users can define **custom commands**. Chat history can be **searched, exported, or summarized**.

---

## **SECTION E: PERMISSIONS & SECURITY** 🔐

**E1. Permission Granularity:** *(Check all that apply)*
- [x] User-level permissions ✅ 2025-12-04
- [ ] Dashboard-level permissions
- [ ] Individual chart permissions
- [ ] Chat session permissions
- [x] Agent access permissions ✅ 2025-12-04
- [ ] Data source permissions

**E2. Sharing Mechanisms:**
- [x] Simple public/private toggle ✅ 2025-12-04
- [ ] Specific user invitations
- [ ] Role-based sharing (view/edit/admin)
- [ ] Time-limited access
- [ ] Password-protected shares
- [ ] Domain-restricted sharing

**E3. Audit & Compliance:**
- [ ] Basic access logging
- [ ] Detailed audit trails (who changed what when)
- [ ] Data access tracking
- [ ] GDPR compliance features
- [ ] Export/delete user data capabilities

**E4. Data Security Requirements:**
- [ ] Standard encryption at rest/transit
- [ ] Field-level encryption for sensitive data
- [ ] Data anonymization capabilities
- [ ] Geographic data residency requirements
- [ ] Industry compliance (specify): ________________________________

---

## **SECTION F: ML MODEL & ENERGY OPTIMIZATION** 🔋

**F1. ML Model Integration:**
- [ ] Model runs on user request only
- [ ] Scheduled model execution (hourly/daily)
- [ ] Event-triggered (new data arrival)
- [ ] Continuous learning/updating models

**F2. ML Input/Output Data:**
- [ ] Simple energy consumption numbers
- [ ] Complex multi-dimensional energy data
- [ ] Weather and external factor integration
- [ ] User behavior pattern data
- [ ] Historical prediction accuracy tracking

**F3. Model Results Storage:**
- [ ] Store only final predictions
- [ ] Store intermediate calculations
- [ ] Version model outputs for comparison
- [ ] Confidence scores and uncertainty ranges
- [ ] Model explanation/reasoning data

**F4. Energy Data Characteristics:**
- Data update frequency: ________________
- Number of energy sources/meters: ________________
- Historical data span needed: ________________
- Real-time vs batch processing preference: ________________

---

## **SECTION G: NOTIFICATIONS & REAL-TIME FEATURES** 🔔

**G1. Notification Triggers:** *(Check all that apply)*
- [ ] ML model completion
- [ ] New data availability
- [ ] Dashboard sharing events
- [ ] Chat mentions/responses
- [ ] System alerts/errors
- [ ] Scheduled report generation

**G2. Notification Delivery:**
- [ ] In-app notifications only
- [ ] Email notifications
- [ ] Push notifications (if mobile app planned)
- [ ] Webhook/API callbacks
- [ ] SMS notifications (critical alerts)

**G3. Real-Time Update Requirements:**
- [ ] Live chart data updates
- [ ] Real-time chat messaging
- [ ] Collaborative dashboard editing
- [ ] Live user presence indicators
- [ ] System status updates

**G4. Notification Management:**
- [ ] User-configurable notification preferences
- [ ] Notification history/archive
- [ ] Read/unread status tracking
- [ ] Notification grouping/batching
- [ ] Do-not-disturb scheduling

---

## **SECTION H: PERFORMANCE & SCALABILITY** ⚡

**H1. Performance Requirements:**
- Dashboard load time target: ________________ seconds
- Chart rendering time target: ________________ seconds
- Chat message response time: ________________ seconds
- Concurrent user target: ________________ users
- Database query response time: ________________ ms

**H2. Scalability Planning:**
- Expected growth rate: ________________% per year
- Peak usage patterns: ________________
- Geographic distribution: ________________
- Mobile app planned: [ ] Yes [ ] No

**H3. Caching Strategy:**
- [ ] No caching needed
- [ ] Simple query result caching
- [ ] Redis for session/temporary data
- [ ] CDN for static chart images
- [ ] Application-level caching layers

**H4. Backup & Recovery:**
- Recovery time objective (RTO): ________________
- Recovery point objective (RPO): ________________
- [ ] Point-in-time recovery needed
- [ ] Cross-region backup requirements

---

## **SECTION I: TECHNICAL CONSTRAINTS & PREFERENCES** 🔧

**I1. Database Constraints:**
- [ ] Must use standard PostgreSQL (no extensions)
- [ ] Can use PostgreSQL extensions (TimescaleDB, PostGIS, etc.)
- [ ] Need multi-database support
- [ ] Specific version requirements: ________________

**I2. Development Preferences:**
- [ ] Prefer simple schema over performance optimization
- [ ] Optimize for read-heavy workloads
- [ ] Optimize for write-heavy workloads
- [ ] Balance read/write performance
- [ ] Prioritize data consistency over availability
- [ ] Prioritize availability over strict consistency

**I3. Migration & Evolution:**
- [ ] Schema must be stable (minimal future changes)
- [ ] Expect frequent schema evolution
- [ ] Need zero-downtime migration capability
- [ ] Backward compatibility requirements

---

## **SECTION J: INTEGRATION & ECOSYSTEM** 🔗

**J1. External System Integration:**
- [ ] CRM systems
- [ ] Business intelligence tools
- [ ] Energy management platforms
- [ ] IoT platforms
- [ ] API webhooks for third parties
- [ ] Other: ________________________________

**J2. Data Import/Export:**
- [ ] Bulk data import capabilities
- [ ] Real-time data streaming
- [ ] Scheduled data exports
- [ ] API access for external systems
- [ ] Standard format support (CSV, JSON, etc.)

**J3. Opencode SDK Integration:**
- [ ] Standard chat functionality only
- [ ] Custom agent development
- [ ] Tool/function calling capabilities
- [ ] Session management integration
- [ ] Custom permission integration

---

## **ADDITIONAL REQUIREMENTS & CONSTRAINTS** 📝

**Please describe any specific requirements not covered above:**

1. **Business Logic Constraints:**
   ________________________________

2. **Regulatory/Compliance Requirements:**
   ________________________________

3. **Performance Critical Features:**
   ________________________________

4. **Known Technical Limitations:**
   ________________________________

5. **Future Feature Considerations:**
   ________________________________

---

**📊 QUESTIONNAIRE COMPLETION CHECKLIST:**
- [ ] Section A: User Management (4 questions)
- [ ] Section B: Dashboard Architecture (5 questions)
- [ ] Section C: Data Management (4 questions)
- [ ] Section D: Chat System (5 questions)
- [ ] Section E: Permissions & Security (4 questions)
- [ ] Section F: ML & Energy Optimization (4 questions)
- [ ] Section G: Notifications (4 questions)
- [ ] Section H: Performance (4 questions)
- [ ] Section I: Technical Constraints (3 questions)
- [ ] Section J: Integration (3 questions)
- [ ] Additional Requirements completed

---

**COMPLETION DATE:** ________________
**COMPLETED BY:** ________________
**REVIEW DATE:** ________________

---

*Once completed, this questionnaire will be used to design a comprehensive PostgreSQL schema with proper indexing, relationships, constraints, and performance optimizations tailored specifically to your OCP project requirements.*
